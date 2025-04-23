import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
    title: string;
    description: string;
    date: string;
    slug: string;
    pinned: boolean;
    content: string;
}

const contentDirectory = path.join(process.cwd(), "src/content");

export function getAllPosts(): PostMeta[] {
    const files = getAllMdxFiles(contentDirectory);

    const posts = files.map((filePath) => {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        const relativePath = path.relative(contentDirectory, filePath);
        const slug = data.slug || relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");

        return {
            title: data.title ?? "Untitled",
            description: data.description ?? "",
            date: data.date ?? new Date().toISOString(),
            slug,
            pinned: data.pinned ?? false,
            content,
        };
    });

    return posts.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

// Recursively get all MDX files (about, roadmap, notes/*, etc.)
function getAllMdxFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllMdxFiles(filePath));
        } else if (file.endsWith(".mdx")) {
            results.push(filePath);
        }
    });

    return results;
}

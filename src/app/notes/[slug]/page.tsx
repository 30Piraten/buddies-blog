import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function generateStaticParams() {
    const notesDir = path.join("src/content/notes");
    const noteFiles = fs.readdirSync(notesDir);
    return noteFiles.map(file => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export default function NotePage({ params }: { params: { slug: string }}) {
    // const { slug } = params;
    const filePath = path.join("src/content/notes", `${params.slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent)

    return (
        <article>
            <MDXRemote source={content} />
        </article>
    )
}
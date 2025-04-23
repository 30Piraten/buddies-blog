import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostLayout from "../../../../components/PostLayout/PostLayout";
import Link from "next/link";
import styles from "../../../../components/PostLayout/PostLayout.module.css"
import Image from "next/image";

export async function generateStaticParams() {
    const notesDir = path.join("src/content/notes");
    const noteFiles = fs.readdirSync(notesDir);
    return noteFiles.map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const notesDir = path.join("src/content/notes");
    const noteFiles = fs.readdirSync(notesDir).sort();

    // Load frontmatter for all posts
    const posts = noteFiles.map((file) => {
        const filePath = path.join(notesDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        return {
            slug: file.replace(/\.mdx$/, ""),
            title: data.title || file.replace(/\.mdx$/, ""),
            content,
        };
    });

    // @ts-ignore
    const mdxComponents = {
        img: (props) => (
            <Image
                {...props}
                alt={props.alt}
                src={props.src}
                width={props.width || 600}
                height={props.height || 400}
            />
        ),
    };

    // Find current post index
    const currentIndex = posts.findIndex((p) => p.slug === slug);
    const prevPost = posts[currentIndex - 1] || null;
    const nextPost = posts[currentIndex + 1] || null;

    const currentPost = posts[currentIndex];

    return (
        <PostLayout>
            <article>
                <MDXRemote source={currentPost.content} components={mdxComponents} />
            </article>

            <nav className={styles.navContainer}>
                <div>
                    {prevPost && (
                        <Link href={`/notes/${prevPost.slug}`} className={styles.navLnk}>
                            ← {prevPost.title}
                        </Link>
                    )}
                </div>

                <div>
                    <Link href="/" className={`${styles.navLnk} ${styles.homeLnk}`}>
                        🏠 Home
                    </Link>
                </div>

                <div>
                    {nextPost && (
                        <Link href={`/notes/${nextPost.slug}`} className={styles.navLnk}>
                            {nextPost.title} →
                        </Link>
                    )}
                </div>
            </nav>
        </PostLayout>
    );
}

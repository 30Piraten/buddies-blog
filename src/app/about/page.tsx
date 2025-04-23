import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostLayout from "../../../components/PostLayout/PostLayout";
import styles from "../../../components/PostLayout/PostLayout.module.css";

export default async function AboutPage() {
    const filePath = path.join(process.cwd(), "src/content/about.mdx");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { content } = matter(fileContent);

    return (
        <PostLayout>
            <article className={styles.postContainer}>
                <MDXRemote source={content} />
            </article>
        </PostLayout>
    );
}

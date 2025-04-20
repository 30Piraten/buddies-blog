import { MDXRemote } from "next-mdx-remote/rsc"
import fs from "fs";
import path from "path";

export default async function AboutPage() {
    const filePath = path.join(process.cwd(), "src/content/about.mdx");
    const fileContent = fs.readFileSync(filePath, "utf-8");
 
    return (
        <article>
            <MDXRemote source={fileContent} />
        </article>
    )
}
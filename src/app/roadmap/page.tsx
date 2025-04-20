import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path"; 

export default async function RoadMap() {
    const filepath = path.join(process.cwd(), "src/content/RoadMap.mdx");
    const fileContent = fs.readFileSync(filepath, "utf-8");

    return (
        <article>
            <MDXRemote source={fileContent} />
        </article>
    )
}
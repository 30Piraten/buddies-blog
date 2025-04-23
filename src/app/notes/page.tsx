import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import readingTime from "reading-time";
import styles from "../../../components/PostLayout/PostLayout.module.css";

type NoteProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  readingTime: string;
};

export default function NotesPage() {
  const notesDir = path.join(process.cwd(), "src/content/notes");
  const noteFiles = fs.readdirSync(notesDir);

  const nts: NoteProps[] = noteFiles
      .map((filename) => {
        const slug = filename.replace(/\.mdx?$/, "");
        const fullPath = path.join(notesDir, filename);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data, content } = matter(fileContent);
        const readTime = readingTime(content);

        return {
          slug,
          title: data.title ?? "Untitled",
          description: data.description ?? "No description",
          date: data.date ?? "1970-01-01",
          tags: data.tags ?? [],
          readingTime: readTime.text,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
      <section className={styles.postContainer}>
        {/*<h1>Notes</h1>*/}
        <ul className={styles.notesList}>
          {nts.map((note) => (
              <li key={note.slug} className={styles.noteItem}>
                <Link href={`/notes/${note.slug}`}>
                  <strong className={styles.strong}>{note.title}</strong> ({note.readingTime})<br />
                  <small className={styles.sm}>{note.description}</small><br />
                  {/*<small>{note.date} | Tags: {note.tags.join(", ")}</small>*/}
                  {/*  <small>{new Date(note.date).toLocaleDateString()} | Tags: {note.tags.join(", ")}</small>*/}
                    <small>
                        {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                        }).format(new Date(note.date))}
                        {" | Tags: "}
                        {note.tags.join(", ")}
                    </small>

                </Link>
              </li>
          ))}
        </ul>
      </section>
  );
}

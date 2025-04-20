import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import readingTime from "reading-time";

type NoteProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export default function NotesPage() {
  const notesDir = path.join(process.cwd(), "src/content/notes");
  const noteFiles = fs.readdirSync(notesDir);

  const nts: NoteProps[] = noteFiles.map((filename) => {
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
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section>
      <h1>Notes</h1>
      <ul>
        {nts.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`}>
              <strong>{note.title}</strong> ({note.readingTime})<br />
              <small>{note.description}</small><br />
              <small>{note.date} | Tags: {note.tags.join(", ")}</small>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

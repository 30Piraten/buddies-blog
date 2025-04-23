// app/page.tsx
import { getAllPosts } from "../../lib/posts";
import Link from "next/link";
import styles from "../../components/HomePage/HomePage.module.css";
import PostLayout from "../../components/PostLayout/PostLayout";

export default async function HomePage() {
  const posts = getAllPosts();
  const pinned = posts.filter(p => p.pinned);
  const notes = posts.filter(p => !p.pinned).slice(0, 2);

  return (
      <PostLayout>
      <main className={styles.aboutRoadmap}>
        <section className={styles.arPinnedSection}>
          {pinned.map((post) => (
              <Link href={`/${post.slug}`} key={post.slug} className={styles.arCardPinned}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {/*<p>{post.date}</p>*/}
              </Link>
          ))}
        </section>

        <section className={styles.notesSection}>
          <h3 className={styles.sectionTitle}>Latest Notes</h3>
          <div className={styles.cardGrid}>
            {notes.map((note) => (
                <Link href={`/${note.slug}`} key={note.slug} className={styles.cardNote}>
                  <h4>{note.title}</h4>
                  <p>{note.description}</p>
                  <p>{new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(note.date))}</p>
                </Link>
            ))}
          </div>
          <Link href="/notes" className={styles.moreButton}>
            More Notes →
          </Link>
        </section>
      </main>
      </PostLayout>
  );
}

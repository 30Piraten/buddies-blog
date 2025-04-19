import ExternalLink from "../ExternalLink/ExternalLink";
import styles from "./MainPageContent.module.css";

export default function MainPageContent() {
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>
        Here you can add links to your favourite resources, poetry, downloads, or inspirations.{" "}
        <ExternalLink href="https://github.com/30Piraten">GitHub</ExternalLink>. Books I reread often on{" "}
        <ExternalLink href="https://www.amazon.com/">Amazon</ExternalLink> or{" "}
        <ExternalLink href="https://www.goodreads.com">GoodReads</ExternalLink>. Some poetry at{" "}
        <ExternalLink href="https://www.versevirtual.com/">VerseVirtual</ExternalLink> and my{" "}
        <ExternalLink href="https://instagram.com/poetry.journal/">poetry journal</ExternalLink>. 
        Inspirations from <ExternalLink href="https://strak.systems">Straks</ExternalLink>,{" "}
        <ExternalLink href="https://kevinmaigny.fr">Kevin Maigny</ExternalLink>,{" "}
        <ExternalLink href="https://www.anthonymoore.dev/">Anthony Moore</ExternalLink>, and{" "}
        <ExternalLink href="https://www.mattfarley.ca/">Matthew Farley</ExternalLink>. Subscribe via{" "}
        <ExternalLink href="https://tinyletter.com/">Tinyletter</ExternalLink> or{" "}
        <ExternalLink href="https://buttondown.email/">Buttondown</ExternalLink>. Hosted on{" "}
        <ExternalLink href="https://vercel.com">Vercel</ExternalLink>.
      </p>
    </section>
  );
}

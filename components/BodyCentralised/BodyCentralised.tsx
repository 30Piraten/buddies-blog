import Link from "next/link";
import styles from "./BodyCentralised.module.css";
import MainPageContent from "../MainPageContent/MainPageContent";

export default function BodyCentralised() {
    return (
        <div className={styles.container}>
            <ul className={styles.navList}>
                <li className={styles.navLi}>
                    <Link href="/about" className={styles.link}>
                        About
                    </Link>
                </li>
                <li className={styles.navLi}>
                    <Link href="/roadmap" className={styles.link}>
                        Roadmap
                    </Link>
                </li>
                <li className={styles.navLi}>
                    <Link href="/notes" className={styles.link}>
                        Notes: design & code
                    </Link>
                </li>
            </ul>

            <MainPageContent />
        </div>
    );
}

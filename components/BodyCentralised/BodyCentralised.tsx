import Link from "next/link";
import styles from "./BodyCentralised.module.css";
import MainPageContent from "../MainPageContent/MainPageContent";

export default function BodyCentralised() {
    return (
        <div className={styles.container}>
            <ul className={styles.navList}>
                <li className={styles.navLi}>
                    <Link href="/about" className={styles.link}>
                        about
                    </Link>
                </li>
                <li className={styles.navLi}>
                    <Link href="/roadmap" className={styles.link}>
                        roadmap
                    </Link>
                </li>
                <li className={styles.navLi}>
                    <Link href="/notes" className={styles.link}>
                        notes: design & code
                    </Link>
                </li>
            </ul>

            <MainPageContent />
        </div>
    );
}

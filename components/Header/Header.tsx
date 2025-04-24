// components/Header.tsx

import Link from "next/link";
import styles from './Header.module.css';
// import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    buddy:me
                    {/*<ThemeToggle />*/}
                </Link>
            </div>
        </header>
    );
}

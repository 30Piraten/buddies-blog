// components/Footer.tsx
'use client'

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Buddy.me
        </footer>
    );
}

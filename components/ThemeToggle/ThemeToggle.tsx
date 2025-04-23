"use client"

import { useEffect, useState } from 'react';
import styles from "./ThemeToggle.module.css"

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.body.setAttribute('data-theme', storedTheme);
            setIsDarkMode(storedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleTheme} className={styles.toggle}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}

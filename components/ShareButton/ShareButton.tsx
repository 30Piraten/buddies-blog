"use client";

import { useEffect, useState } from "react";
import styles from "./ShareButton.module.css";

type Props = {
    title: string;
    slug: string;
};

export default function ShareButtons({ title, slug }: Props) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/${slug}`);
        }
    }, [slug]);

    const shareText = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(url);

    return (
        <div className={styles.shareContainer}>
            <span className={styles.shareLabel}>Share:</span>

            <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
            >
                🐦 X
            </a>

            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
            >
                💼 LinkedIn
            </a>

            <button
                onClick={() => {
                    navigator.clipboard.writeText(url);
                }}
                className={styles.shareBtn}
            >
                📋 Copy
            </button>
        </div>
    );
}

import styles from "./PostLayout.module.css";
import { ReactNode } from "react";
import Image from "next/image";

export default function PostLayout({ children }: { children: ReactNode }) {
    return <article className={styles.postContainer}>{children}</article>;
}

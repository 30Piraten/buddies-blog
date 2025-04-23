import styles from "./PostLayout.module.css";
import { ReactNode } from "react";

export default function PostLayout({ children }: { children: ReactNode }) {
    return <article className={styles.postContainer}>{children}</article>;
}

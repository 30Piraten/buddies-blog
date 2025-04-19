import styles from "./ExternalLink.module.css";
import React from "react";

type ExternalLinkProps = {
  href: string,
  target?: string,
  rel?: string,
  children: React.ReactNode,
  className?: string,
}

export default function ExternalLink({ href, target, rel, children, className="" }: ExternalLinkProps) {
  return (
    <a href={href} target={target ?? "_blank"} rel={rel ?? "noopener noreferrer"} className={`${styles.linked} ${className}`}>
      {children}
      {/* <span className={styles.icon} aria-hidden="true">↗</span> */}
    </a>
    
  );
}
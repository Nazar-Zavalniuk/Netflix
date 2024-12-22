import Link from "next/link";

import LogoIcon from "./icons/logo";
import styles from "./logo.module.css";

export interface LogoProps {
  type?: "logo" | "link logo";
}

export function Logo({ type = "logo" }: LogoProps) {
  const logoIcon =
    type === "logo" ? (
      <LogoIcon className={styles.icon} />
    ) : (
      <Link href="/" role="link">
        <LogoIcon className={styles.icon} />
      </Link>
    );

  return (
    <div className={styles.wrapper}>
      <span>
        {logoIcon}
        <span className={styles.text}>Netflix</span>
      </span>
    </div>
  );
}

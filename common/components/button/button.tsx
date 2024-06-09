import Link from "next/link";

import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  role?: string;
  id?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

export function Button({
  children,
  href,
  className,
  role,
  id,
  type,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        role={role}
        id={id}
        className={`${styles.btn} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      role={role}
      id={id}
      type={type}
      className={`${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
}

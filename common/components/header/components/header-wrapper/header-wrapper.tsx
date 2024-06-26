import styles from "./header-wrapper.module.css";

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-0 overflow-visible z-10">
      <header className={styles.header}>
        <div className="h-8 md:h-11">
          <div className={styles.headerContainer}>{children}</div>
        </div>
      </header>
    </div>
  );
}

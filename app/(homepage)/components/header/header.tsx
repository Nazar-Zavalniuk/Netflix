import { ActionBlock } from "./components/action-block";
import { Logo } from "./components/logo";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className="relative h-0 overflow-visible z-10">
      <header className={styles.header}>
        <div className="h-8 md:h-11">
          <div className={styles.headerContainer}>
            <Logo />
            <ActionBlock />
          </div>
        </div>
      </header>
    </div>
  );
}

import styles from "./footer.module.css";
import ExclamationTriangleIcon from "./icons/exclamation-triangle";

export function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <span aria-hidden={true}>
          <ExclamationTriangleIcon width={24} height={24} />
        </span>
        <p className={styles.footerText}>
          This site is designed solely for educational purposes to demonstrate
          the skills acquired during training.
        </p>
      </div>
    </footer>
  );
}

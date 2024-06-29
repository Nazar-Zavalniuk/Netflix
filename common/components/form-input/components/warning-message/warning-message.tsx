import XCircleIcon from "./icons/x-circle";
import styles from "./warning-message.module.css";

export function WarningMessage() {
  return (
    <div id="warning-message" className={styles.warningMessage}>
      <XCircleIcon className="mr-1 mt-px" />
      Please enter a valid email address.
    </div>
  );
}

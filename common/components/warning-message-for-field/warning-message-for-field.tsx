import XCircleIcon from "./icons/x-circle";
import styles from "./warning-message-for-field.module.css";

interface WarningMessageProps {
  showMessage: boolean;
  message: string;
}

export function WarningMessageForField(props: WarningMessageProps) {
  const { showMessage, message } = props;

  if (!showMessage) {
    return null;
  }

  return (
    <div id="warning-message" className={styles.warningMessage}>
      <XCircleIcon className="mr-1 mt-px" />
      {message}
    </div>
  );
}

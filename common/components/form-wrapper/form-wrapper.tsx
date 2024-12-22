import { IChildren } from "@/common/types";

import styles from "./form-wrapper.module.css";

export function FormWrapper({ children }: IChildren) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

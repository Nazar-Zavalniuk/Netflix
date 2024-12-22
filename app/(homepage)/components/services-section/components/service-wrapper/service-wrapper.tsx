import { IChildren } from "@/common/types";

import styles from "./service-wrapper.module.css";

export function ServiceWrapper({ children }: IChildren) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
      <div className="w-full h-2 absolute -bottom-2 bg-gray-900" />
    </div>
  );
}

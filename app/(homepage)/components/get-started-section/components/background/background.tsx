import Image from "next/image";

import styles from "./background.module.css";
import BgImage from "./images/get-started-background.jpg";

export function Background() {
  return (
    <div className="w-full h-full absolute left-0 top-0">
      <div className="w-full h-full overflow-hidden relative">
        <Image
          src={BgImage}
          alt=""
          priority
          sizes="100vw"
          aria-hidden={true}
          className="w-auto sm:w-full h-full sm:scale-125 sm:translate-y-[-10%] object-cover"
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}

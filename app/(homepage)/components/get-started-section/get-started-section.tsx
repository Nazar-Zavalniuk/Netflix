import { SignUpForm } from "../sing-up-form";
import { Background } from "@/common/components/background";

import styles from "./get-started-section.module.css";

export function GetStartedSection() {
  return (
    <div className={styles.wrapper}>
      <Background />
      <div className={styles.contentWrapper}>
        <div className="basis-1/2 w-full z-10">
          <h1 className="font-bold text-[2rem] leading-[1.25] md:text-[3rem] md:font-black">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="font-normal text-lg mt-4 tracking-wide leading-[1.25] sm:tracking-normal md:text-[1.5rem]">
            Watch anywhere. Cancel anytime.
          </p>
          <SignUpForm className="mt-6" />
        </div>
      </div>
      <div className="w-full h-2 absolute -bottom-2 bg-gray-900" />
    </div>
  );
}

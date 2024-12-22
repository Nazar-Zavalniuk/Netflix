/* eslint-disable @next/next/no-img-element */
import styles from "./offline-feature.module.css";

export function OfflineFeature() {
  return (
    <div className="basis-1/2 z-10 order-2 md:order-1">
      <div className="relative">
        <img
          src="https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/mobile-0819-tT5hGOp6x6j8aYqBssBC97DF11ID7h.jpg"
          alt=""
          className="w-full"
        />
        <div className={styles.animationWrapper}>
          <div className="mr-4 grow-0 shrink-0">
            <img
              src="https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/boxshot-MuJifOJzc31cojCJZyozVfghGbnJJs.png"
              alt=""
              className="h-12 sm:h-16 md:h-[4.5rem] lg:h-20"
            />
          </div>
          <div className="text-left grow shrink my-[0.3]">
            <div className="text-white text-[0.875rem] font-medium sm:text-[1rem]">
              Stranger Things
            </div>
            <div className="text-[#0071eb] text-[0.75rem] font-normal sm:text-[0.875rem]">
              Downloading...
            </div>
          </div>
          <div className={styles.downloadImg} />
        </div>
      </div>
    </div>
  );
}

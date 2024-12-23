import { IChildren } from "@/common/types";

export function ActionBlockWrapper({ children }: IChildren) {
  return (
    <div className="flex flex-[0_auto] ml-2 mt-2 w-auto md:ml-4 md:flex-[0_0_calc(66.667%-1rem)]">
      <div className="flex w-full h-auto justify-end">
        <div className="inline-flex items-end justify-end -ml-2 w-[calc(100%+0.5rem)] md:-ml-6 md:w-[calc(100%+1.5rem)]">
          {children}
        </div>
      </div>
    </div>
  );
}

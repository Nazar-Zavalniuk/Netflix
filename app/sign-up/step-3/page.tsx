import { Footer } from "@/common/components/footer";
import { Header } from "@/common/components/header";

import { FormSelectPlan } from "./components/form-select-plan";

export default function Step3() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex-auto">
        <Header logoType="link logo" />
        <FormSelectPlan />
      </div>
      <div className="border-solid border-[#808080b3] border-t">
        <Footer />
      </div>
    </div>
  );
}

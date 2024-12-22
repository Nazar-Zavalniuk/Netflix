import { FormOnlyPageTemplate } from "@/common/components/form-only-page-template";

import { ServiceForm } from "./components/service-form";

export default function Step2() {
  return (
    <FormOnlyPageTemplate
      headerProps={{ logoType: "link logo" }}
      form={<ServiceForm />}
    />
  );
}

import { FormOnlyPageTemplate } from "@/common/components/form-only-page-template";

import { RegistrationForm } from "./components/registration-form";

export default function Step1() {
  return (
    <FormOnlyPageTemplate
      headerProps={{ logoType: "link logo" }}
      form={<RegistrationForm />}
    />
  );
}

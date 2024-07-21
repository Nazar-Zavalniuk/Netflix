import { FormOnlyPageTemplate } from "@/common/components/form-only-page-template";

import { PasswordResetForm } from "./components/password-reset-form";

export default function LoginHelp() {
  return (
    <FormOnlyPageTemplate
      headerProps={{ logoType: "link logo" }}
      form={<PasswordResetForm />}
    />
  );
}

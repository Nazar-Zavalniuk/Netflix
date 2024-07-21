import { FormOnlyPageTemplate } from "@/common/components/form-only-page-template";

import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <FormOnlyPageTemplate
      headerProps={{ logoType: "link logo", showSignInButton: false }}
      form={<LoginForm />}
    />
  );
}

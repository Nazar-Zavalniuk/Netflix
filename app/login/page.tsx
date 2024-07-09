import { Header } from "@/common/components/header";

import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <>
      <Header logoType="link logo" showSignInButton={false} />
      <LoginForm />
    </>
  );
}

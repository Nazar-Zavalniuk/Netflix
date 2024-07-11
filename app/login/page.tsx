import { Background } from "@/common/components/background";
import { Footer } from "@/common/components/footer";
import { Header } from "@/common/components/header";

import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex-auto">
        <Header logoType="link logo" showSignInButton={false} />
        <div className="hidden sm:block">
          <Background />
        </div>
        <LoginForm />
      </div>
      <div className="border-solid border-[#808080b3] border-t-[1px] sm:border-t-0">
        <Footer />
      </div>
    </div>
  );
}

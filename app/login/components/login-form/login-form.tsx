import Link from "next/link";

import { Button } from "@/common/components/button";

import { EmailInput } from "./components/email-input";
import { Footer } from "./components/footer";
import { PasswordInput } from "./components/password-input";

export function LoginForm() {
  return (
    <div className="m-[0_auto] pt-20 sm:max-w-[28.125rem]">
      <div className="flex flex-col px-[5%] pb-[1.185rem] sm:py-12 sm:px-[4.25rem] text-white bg-[#000000b3]">
        <header>
          <h1 className="mb-7 text-[2rem] font-bold leading-[1.157]">
            Sign In
          </h1>
        </header>
        <form className="flex flex-col gap-4">
          <EmailInput />
          <PasswordInput />
          <Button
            type="button"
            role="button"
            className="min-h-10 py-1.5 px-4 text-[1rem]"
          >
            Sign In
          </Button>
          <Link
            href="/login-help"
            role="link"
            className="text-center m-[0_auto] leading-[1.1]"
          >
            Forgot password?
          </Link>
        </form>
        <Footer />
      </div>
    </div>
  );
}

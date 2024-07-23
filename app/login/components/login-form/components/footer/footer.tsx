import Link from "next/link";

import { Checkbox } from "@/common/components/checkbox";

export function Footer() {
  return (
    <footer className="mt-[1.875rem]">
      <div>
        <div className="flex items-center text-base font-normal">
          <Checkbox id="remember-me" name="remember-me" />
          <label htmlFor="remember-me" className="pl-3 flex-auto">
            Remember me
          </label>
        </div>
        <p className="mt-4 text-[#ffffffb3]">
          New to Netflix?{" "}
          <Link href="/" className="text-white hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </footer>
  );
}

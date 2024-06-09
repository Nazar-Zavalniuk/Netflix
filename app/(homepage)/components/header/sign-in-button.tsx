import { Button } from "@/common/components/button";

export default function SignInButton() {
  return (
    <div className="inline-flex ml-2 box-border md:ml-6">
      <div className="flex">
        <Button
          href="/login"
          role="button"
          className="px-4 py-1 w-auto min-h-8 text-sm leading-[0.875rem]"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

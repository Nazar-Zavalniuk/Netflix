import { Button } from "@/common/components/button";
import { FormInput } from "@/common/components/form-input";

import ChevronRightIcon from "./icons/chevron-right";
import styles from "./sign-up-form.module.css";

interface SignUpFormProps {
  className?: string;
}

export function SignUpForm({ className }: SignUpFormProps) {
  return (
    <div className={className}>
      <div className="m-[0_auto] px-6 max-w-[61.5rem] sm:px-8">
        <form
          aria-label="Sign up or restart your membership with Netflix."
          className="flex flex-col"
        >
          <h3 className=" font-normal text-lg tracking-wide sm:tracking-normal md:text-[1.25rem]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className={styles.actionBlock}>
            <FormInput
              label="Email address"
              id="email-input"
              type="email"
              name="email"
              autoComplete="email"
              minLength={5}
              maxLength={50}
              size="small"
            />
            <Button role="button" type="submit" className={styles.btn}>
              Get Started
              <div aria-hidden={true} className="inline-block">
                <ChevronRightIcon className="ml-2 sm:ml-3" />
              </div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

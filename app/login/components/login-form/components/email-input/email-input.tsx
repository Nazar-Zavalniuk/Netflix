import { FormInput } from "@/common/components/form-input";

export function EmailInput() {
  return (
    <FormInput
      label="Email"
      id="email"
      type="email"
      name="login"
      autoComplete="email"
      minLength={5}
      maxLength={50}
      size="normal"
    />
  );
}

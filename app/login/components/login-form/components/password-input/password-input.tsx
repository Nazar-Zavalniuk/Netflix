import { FormInput } from "@/common/components/form-input";

export function PasswordInput() {
  return (
    <FormInput
      label="Password"
      id="password"
      type="password"
      name="password"
      autoComplete="password"
      size="normal"
    />
  );
}

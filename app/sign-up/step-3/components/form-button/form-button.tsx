import { Button } from "@/common/components/button";

export function FormButton() {
  return (
    <div className="flex justify-center">
      <Button
        href="/"
        role="button"
        type="button"
        className="flex-1 max-w-[27.5rem] min-h-10"
      >
        Next
      </Button>
    </div>
  );
}

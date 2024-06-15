import { useCallback, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const [inputInteraction, setInputInteraction] = useState(false);

  const handleFocus = useCallback(() => {
    setInputInteraction(true);
  }, []);

  const handleBlur = useCallback(() => {
    setInputInteraction(false);
  }, []);

  const [autoFill, setAutofill] = useState(false);

  const handleAnimationStart = useCallback(
    (e: React.AnimationEvent<HTMLInputElement>) => {
      const autofillStart = e.animationName.includes("autoFillStart");

      if (autofillStart) {
        setAutofill(true);
      } else {
        setAutofill(false);
      }
    },
    []
  );

  const [isValueValid, setIsValueValid] = useState(true);

  return [
    handleChange,
    handleFocus,
    handleBlur,
    handleAnimationStart,
    value,
    inputInteraction,
    autoFill,
    isValueValid,
  ] as const;
}

import { Dispatch, useCallback } from "react";

import {
  autofillEnded,
  autofillStarted,
  changeValue,
  interactionBegan,
  interactionEnded,
} from "../../../reducers/action-creators";
import { ActionTypes } from "../../../types";

export default function useInputField(onDispatch: Dispatch<ActionTypes>) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onDispatch(changeValue(e.target.value));
    },
    [onDispatch]
  );

  const handleFocus = useCallback(() => {
    onDispatch(interactionBegan());
  }, [onDispatch]);

  const handleBlur = useCallback(() => {
    onDispatch(interactionEnded());
  }, [onDispatch]);

  const handleAnimationStart = useCallback(
    (e: React.AnimationEvent<HTMLInputElement>) => {
      const autofillStart = e.animationName.includes("autofillStart");

      if (autofillStart) {
        onDispatch(autofillStarted());
      } else {
        onDispatch(autofillEnded());
      }
    },
    [onDispatch]
  );

  return {
    handleAnimationStart,
    handleBlur,
    handleChange,
    handleFocus,
  } as const;
}

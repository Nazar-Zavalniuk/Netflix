import { Dispatch, useCallback } from "react";

import { hidePassword, showPassword } from "../../reducers/action-creators";
import { ActionTypes } from "../../types";

import EyeIcon from "./icons/eye";
import EyeSlashIcon from "./icons/eye-slash";

interface TogglePasswordVisibilityProps {
  showToggle: boolean;
  isPasswordVisible: boolean;
  onDispatch: Dispatch<ActionTypes>;
}

export function TogglePasswordVisibility(props: TogglePasswordVisibilityProps) {
  const { showToggle, isPasswordVisible, onDispatch } = props;

  const handlePasswordVisibility = useCallback(
    (e: React.MouseEvent) => {
      if (isPasswordVisible) {
        onDispatch(hidePassword());
      } else {
        onDispatch(showPassword());
      }

      e.preventDefault();
    },
    [isPasswordVisible, onDispatch]
  );

  if (!showToggle) {
    return null;
  }

  return (
    <button
      type="button"
      role="button"
      title="Show Password"
      tabIndex={-1}
      className="inline-flex absolute top-3 right-2 rounded-full hover:bg-[#80808066]"
      onMouseDown={handlePasswordVisibility}
    >
      <span className="p-2">
        {!isPasswordVisible && <EyeIcon />}
        {isPasswordVisible && <EyeSlashIcon />}
      </span>
    </button>
  );
}

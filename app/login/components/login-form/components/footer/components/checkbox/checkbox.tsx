"use client";

import { useCallback, useState } from "react";

import styles from "./checkbox.module.css";
import CheckmarkIcon from "./icons/checkmark";

interface CheckboxProps {
  id: string;
  name?: string;
  checked?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  const { id, name, checked = true } = props;

  const [isChecked, setIsCheck] = useState(checked);

  const handleChange = useCallback(() => {
    setIsCheck((prevState) => !prevState);
  }, []);

  const checkmarkIcon = (
    <CheckmarkIcon width={12} height={16} className="text-black" />
  );

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        className={styles.checkbox}
        onChange={handleChange}
      />
      <div aria-hidden className={styles.bgCheckbox}>
        {isChecked && checkmarkIcon}
      </div>
    </div>
  );
}

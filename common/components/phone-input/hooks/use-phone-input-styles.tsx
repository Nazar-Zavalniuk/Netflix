/* eslint-disable sort-keys */
import clsx from "clsx";

import classes from "../phone-input.module.css";
import { CountrySelectorStyleProps } from "../types";

function createClassName(className: string): string {
  const isStringEmpty = className.trim().length === 0;

  if (isStringEmpty) {
    throw new Error("className can't be empty string");
  }

  const lastClassName = className[0].toLocaleUpperCase() + className.slice(1);

  return clsx(
    classes["phoneInput"],
    classes[className],
    classes[`custom${lastClassName}`]
  );
}

interface usePhoneInputStylesProps {
  inputInteraction: {
    interaction: boolean;
    isFirstInteraction: boolean;
  };
  isInputValid: boolean;
}

export default function usePhoneInputStyles(props: usePhoneInputStylesProps) {
  const { inputInteraction, isInputValid } = props;

  const { interaction, isFirstInteraction } = inputInteraction;

  const className = createClassName("container");

  const inputClassName = createClassName("input");

  const countrySelectorStyleProps: CountrySelectorStyleProps = {
    className: createClassName("countrySelector"),
    buttonClassName: createClassName("button"),
    buttonContentWrapperClassName: createClassName("buttonContentWrapper"),
    dropdownArrowClassName: createClassName("dropdownArrow"),
    dropdownStyleProps: {
      className: createClassName("dropdown"),
      listItemClassName: createClassName("listItem"),
      listItemDialCodeClassName: createClassName("listItemDialCode"),
    },
  };

  const phoneInputStyle = {
    className,
    inputClassName,
    countrySelectorStyleProps,
  };

  const bgStyle = clsx(
    classes.bgInput,
    isInputValid && !isFirstInteraction && classes.bgValidInput,
    !isInputValid && !isFirstInteraction && classes.bgInvalidInput,
    interaction && classes.bgInputInteraction
  );

  const wrapperStyle = classes.wrapper;

  return { phoneInputStyle, bgStyle, wrapperStyle } as const;
}

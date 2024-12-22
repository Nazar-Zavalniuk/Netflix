"use client";

import { useCallback } from "react";
import clsx from "clsx";

import { IQuestion } from "../../types";

import PlusIcon from "./icons/plus";
import styles from "./question.module.css";
import { formatAnswer } from "./utils/format-answer";

interface QuestionProps extends IQuestion {
  ariaControlsSuffix: string;
  showAnswer: boolean;
  index: number;
  onAnswerVisibility: (answerId: number) => void;
}

export function Question(props: QuestionProps) {
  const {
    ariaControlsSuffix,
    showAnswer,
    index,
    onAnswerVisibility,
    answer,
    question,
  } = props;

  const handleAnswerVisibility = useCallback(() => {
    onAnswerVisibility(index);
  }, [index, onAnswerVisibility]);

  const formattedAnswer = formatAnswer(answer);

  const plusIconStyle = clsx(styles.icon, showAnswer ? styles.iconRotated : "");

  const answerStyle = clsx(styles.answer, showAnswer ? styles.shownAnswer : "");

  return (
    <li className={styles.listItem}>
      <h3 className={styles.header}>
        <button
          aria-expanded={showAnswer}
          aria-controls={`content${ariaControlsSuffix}`}
          id={`button${ariaControlsSuffix}`}
          type="button"
          onClick={handleAnswerVisibility}
          className={styles.btn}
        >
          <span>{question}</span>
          <PlusIcon className={plusIconStyle} />
        </button>
      </h3>
      <div
        id={`content${ariaControlsSuffix}`}
        aria-labelledby={`button${ariaControlsSuffix}`}
        role="region"
        className={answerStyle}
      >
        <span>{formattedAnswer}</span>
      </div>
    </li>
  );
}

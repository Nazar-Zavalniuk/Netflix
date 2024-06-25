"use client";

import { useCallback, useState } from "react";

import { IQuestion } from "../../types";
import { Question } from "../question";

interface QuestionsListProps {
  ariaControlId: string;
  questions: IQuestion[];
}

export function QuestionsList(props: QuestionsListProps) {
  const { ariaControlId, questions } = props;

  const [expandedAnswerId, setExpandedAnswerId] = useState<null | number>(null);

  const handleAnswerVisibility = useCallback(
    (answerId: number) => {
      const isSameAnswerId = answerId === expandedAnswerId;

      if (isSameAnswerId) {
        setExpandedAnswerId(null);
      } else {
        setExpandedAnswerId(answerId);
      }
    },
    [expandedAnswerId]
  );

  return (
    <ul
      id={ariaControlId}
      className="text-white text-[1.125rem] md:text-[1.5rem]"
    >
      {questions.map(({ question, answer }, index) => {
        const ariaControlsSuffix = `--${ariaControlId}--${index}`;

        const showAnswer = index === expandedAnswerId;

        return (
          <Question
            key={question}
            ariaControlsSuffix={ariaControlsSuffix}
            showAnswer={showAnswer}
            index={index}
            onAnswerVisibility={handleAnswerVisibility}
            question={question}
            answer={answer}
          />
        );
      })}
    </ul>
  );
}

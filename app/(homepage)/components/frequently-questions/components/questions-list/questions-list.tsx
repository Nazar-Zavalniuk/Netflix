"use client";

import { Fragment, useCallback, useState } from "react";

import { IQuestion } from "../../types";
import { Question } from "../question";

interface QuestionsListProps {
  ariaControlId: string;
  questions: IQuestion[];
}

export function QuestionsList(props: QuestionsListProps) {
  const { ariaControlId, questions } = props;

  const [expandedAnswerId, setExpandedAnswerId] = useState<null | number>(null);

  const createHandleAnswerVisibility = useCallback(
    (answerId: number) => () => {
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

        const toggleAnswerVisibility = createHandleAnswerVisibility(index);

        return (
          <Fragment key={question}>
            <Question
              ariaControlsSuffix={ariaControlsSuffix}
              showAnswer={showAnswer}
              onAnswerVisibility={toggleAnswerVisibility}
              question={question}
              answer={answer}
            />
          </Fragment>
        );
      })}
    </ul>
  );
}

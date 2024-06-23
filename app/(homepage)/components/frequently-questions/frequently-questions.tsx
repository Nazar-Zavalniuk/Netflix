import { SignUpForm } from "../sing-up-form";

import { QuestionsList } from "./components/questions-list";
import questions from "./data/questions.json";
import styles from "./frequently-questions.module.css";
import { IQuestion } from "./types";

const QUESTIONS: IQuestion[] = questions;
const ariaControlId = "card-faq-accordion";

export function FrequentlyQuestions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className="w-full basis-1/2 z-10">
          <h2 className="text-[2rem] leading-[1.25] font-bold md:text-[3rem] md:font-black">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <QuestionsList
              ariaControlId={ariaControlId}
              questions={QUESTIONS}
            />
            <SignUpForm className="mt-[2.85rem]" />
          </div>
        </div>
        <div className="w-full h-2 absolute -bottom-2 bg-gray-900" />
      </div>
    </div>
  );
}

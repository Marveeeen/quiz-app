import { useRef } from "react";

type TAnswersProps = {
  answers: string[];
  answerState: string;
  userAnswers: string[];
  onSelectAnswer: (selectedAnswer: string) => void;
};

const Answers = ({
  answers,
  answerState,
  userAnswers,
  onSelectAnswer,
}: TAnswersProps) => {
  const shuffledAnswers = useRef<string[] | null>();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelectAnswer(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

import { useRef } from "react";

type TAnswersProps = {
  answers: string[];
  answerState: string;
  selectedAnswer: string;
  onSelectAnswer: (selectedAnswer: string) => void;
};

const Answers = ({
  answers,
  answerState,
  selectedAnswer,
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
        const isSelected = selectedAnswer === answer;
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

        if (answerState === "wrong" && answer === answers[0]) {
          cssClass = "correct";
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

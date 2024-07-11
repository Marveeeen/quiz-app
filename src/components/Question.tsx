import { useState } from "react";
import QUESTIONS from "../data/questions";
import Answers from "./Answers";

type TQuestionProps = {
  activeQuestionIndex: number;
  onSelectAnswer: (answer: string) => void;
};

const Question = ({ activeQuestionIndex, onSelectAnswer }: TQuestionProps) => {
  const [answer, setAnswer] = useState<{
    selectedAnswer: string;
    isCorrect: boolean | null;
  }>({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer: string) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    onSelectAnswer(answer);

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[activeQuestionIndex].answers[0],
      });
      onSelectAnswer(answer);
      
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  console.log(answerState);

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;

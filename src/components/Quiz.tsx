import { useState } from "react";

import QUESTIONS from "../data/questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer: string) => {
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);
  };

  const handleActiveQuestionIndex = () => {
    setActiveQuestionIndex(userAnswers.length);
  };

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <>
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          activeQuestionIndex={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>
      <div className="toolbar">
      <button
          // onClick={handleActiveQuestionIndex}
          disabled={activeQuestionIndex === userAnswers.length}
        >
          Description
        </button>
        <button
          onClick={handleActiveQuestionIndex}
          disabled={activeQuestionIndex === userAnswers.length}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;

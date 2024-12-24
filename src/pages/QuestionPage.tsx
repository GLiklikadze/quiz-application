import React from "react";
import { QuestionProps } from "../dummyData/quizData";
import { checkIcon } from "../check";

const Question: React.FC<QuestionProps> = ({
  currentQuestion,
  state,
  onNextQuestion,
  onSelectAnswer,
  isFinished,
  timeRemaining,
}) => {
  const buttonText =
    state.currentQuestion === state.questions.length - 1
      ? "Finish"
      : "Continue";
  const lowTimeStyle = timeRemaining <= 3 ? "text-red-600 animate-shake" : "";

  if (!isFinished && timeRemaining > 0) {
    const currentQuestionData = state.questions[state.currentQuestion];

    return (
      <section className="w-[800px] flex justify-center items-center bg-[#ede8e3] flex-col p-[60px] gap-[118px]">
        <h2 className="text-[28px] text-[#191d63]">
          {currentQuestionData?.name}
        </h2>
        <div className="flex flex-col gap-[30px] justify-center bg-[#ede8e3]">
          {currentQuestionData?.variants.map((variant: any, index: any) => (
            <div
              key={index}
              className={`w-[510px] h-[80px] flex p-[16px] pl-[24px] bg-white items-center gap-[30px] ${
                state.selectedVariant === index ? "bg-white" : ""
              }`}
              onClick={() => onSelectAnswer(index)}
            >
              <div className="w-[49px] h-[49px] rounded-full bg-[#ede8e3] flex justify-center items-center">
                {checkIcon}
              </div>
              <div className="text-[20px] font-semibold text-[#060710]">
                {variant.name}
              </div>
            </div>
          ))}
        </div>
        <button
          className={`mt-[30px] py-2 px-4 text-sm font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 ${lowTimeStyle}`}
          onClick={() =>
            onNextQuestion(
              state.currentQuestion === state.questions.length - 1
                ? null
                : state.currentQuestion + 1
            )
          }
        >
          {buttonText}
        </button>
      </section>
    );
  }

  if (timeRemaining <= 0) {
    return (
      <section className="w-[800px] flex justify-center items-center bg-[#ede8e3] flex-col p-[60px] gap-[118px]">
        <h2 className="text-[28px] text-[#191d63]">Time's up!</h2>
      </section>
    );
  }

  return null;
};

export default Question;

import React from "react";
import geographyQuiz from "../../dummyData/quizData";
import { ResultProps } from "../../dummyData/quizData";

const Result: React.FC<ResultProps> = ({ style, text, svg, score, point }) => {
  const questionsAmount = geographyQuiz.questions.length;
  return (
    <div
      className="flex justify-between p-[16px] px-[22px] rounded-[8px] bg-[#f4f3f6] w-full items-center"
      style={style}
    >
      <div className="flex gap-[16px] items-center">
        <div className="w-[36px] h-[36px] flex justify-center items-center bg-[#ede8e3] rounded-full">
          {svg}
        </div>
        <p className="text-[16px] font-medium leading-[1.25] text-[#060710] uppercase">
          {text}
        </p>
      </div>
      <p className="text-[16px] font-medium leading-[1.25] text-[#060710] uppercase">
        {score !== undefined ? score : `${point}/${questionsAmount}`}
      </p>
    </div>
  );
};

export default Result;

import geographyQuiz from "../../src/dummyData/quizData";
import { ProgressProps } from "../../src/dummyData/quizData";

const Progress: React.FC<ProgressProps> = ({ currentQuestion }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <progress
        value={currentQuestion + 1}
        max={geographyQuiz.questions.length}
        className="w-full h-[12px] rounded-[16px]"
      ></progress>
      <p className="text-[14px] font-semibold leading-[1.43] text-[#757575]">
        {currentQuestion + 1}/{geographyQuiz.questions.length}
      </p>
    </div>
  );
};

export default Progress;

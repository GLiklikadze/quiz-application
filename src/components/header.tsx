import geographyQuiz from "../dummyData/quizData";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="font-roboto text-[12px] font-semibold p-[4px] rounded-[4px] bg-[#f4f3f6] leading-[1.17] text-[#191d63]">
        QuizTime {geographyQuiz.id}
      </div>
      <h2 className="text-[18px] font-semibold leading-[1.11] text-[#000]">
        {geographyQuiz.name}
      </h2>
    </div>
  );
};

export default Header;

function QuizComponent() {
    return (
      <section className="w-[800px] flex justify-center items-center bg-[#ede8e3] flex-col p-[60px] gap-[118px]">
        <h2 className="text-[28px] text-[#191d63]">
          რას გვიბრუნებს useState ჰუკი?
        </h2>
        <div className="flex flex-col gap-[30px] justify-center bg-[#ede8e3]">
          <div className="w-[510px] h-[80px] flex p-[16px] pl-[24px] bg-white items-center gap-[30px]">
            <div className="w-[49px] h-[49px] rounded-full bg-[#ede8e3] flex justify-center items-center">
              განაახლებს
            </div>
            <div className="text-[20px] font-semibold text-[#060710]">
              Answer Text Here
            </div>
          </div>
        </div>
        <button className="mt-[30px] py-2 px-4 text-sm font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600">
          CONTINUE
        </button>
      </section>
    );
  }
  
  export default QuizComponent;
  
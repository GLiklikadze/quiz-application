

import React, { useState, useEffect } from "react";
import Header from "../src/components/header";
import Progress from "../src/components/progres";
import Question from "../src/pages/QuestionPage";
import Base from "../src/base/base";
import ResultList from "../src/pages/result/result";
import Result from "../src/pages/result/result";
import { ScoreIcon } from "./score";
import { checkIcon } from "./check";
import "./App.css";
import { geographyQuiz, State } from "./dummyData/quizData";

function App() {
  const initialTime = 30;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [state, setState] = useState<State>({
    questions: geographyQuiz.questions,
    currentQuestion: 0,
    selectedVariant: null,
    score: 0,
    point: 0,
    isFinished: false,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const handleSelectAnswer = (id: number) => {
    const updatedState = { ...state, selectedVariant: id };
    setState(updatedState);

    const currentQuestion = state.questions[state.currentQuestion];
    if (currentQuestion.variants[id]?.isCorrect) {
      updatedState.score += currentQuestion.score;
      updatedState.point += 1;
    }

    setState(updatedState);
  };

  const handleNextQuestion = (id: number | null) => {
    if (state.currentQuestion === state.questions.length - 1) {
      setState((prevState) => ({ ...prevState, isFinished: true }));
    } else {
      setState((prevState) => ({
        ...prevState,
        currentQuestion: prevState.currentQuestion + 1,
        selectedVariant: null,
      }));
      setTimeRemaining(initialTime);
    }
  };

  const currentQuestion = state.questions[state.currentQuestion];
  const buttonText =
    state.currentQuestion === state.questions.length - 1
      ? "Finish"
      : "Continue";

  return (
    <div className="App">
      <div className="quiz">
        <Base isFinished={state.isFinished} timeRemaining={timeRemaining}>
          <Header />
          <Progress currentQuestion={state.currentQuestion} />
        </Base>
        <Question
          currentQuestion={currentQuestion}
          state={state}
          onNextQuestion={handleNextQuestion}
          onSelectAnswer={handleSelectAnswer}
          isFinished={state.isFinished}
          timeRemaining={timeRemaining}
        />
        <ResultList
          isFinished={state.isFinished}
          timeRemaining={timeRemaining}
          text={"score gained"}
          svg={undefined}
        >
          <Result
            style={{ borderRadius: "8px 8px 0 0" }}
            text="score gained"
            score={state.score}
            svg={ScoreIcon}
            isFinished={state.isFinished}
          />
          <div className="line"></div>
          <Result
            style={{ borderRadius: "0 0 8px 8px" }}
            text="correct answers"
            point={state.point}
            svg={checkIcon}
            isFinished={state.isFinished}
          />
        </ResultList>
      </div>
    </div>
  );
}

export default App;

import  { useReducer, useState, useEffect } from 'react';
import  { initialState, State, actionType } from '../../dummyData/quizData';

const reducer = (state: State, action: actionType): State => {
  switch (action.type) {
    case 'next-question': {
      const nextIndex = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextIndex,
        selectedVariant: null,
        isFinished: nextIndex >= state.questions.length,
      };
    }
    case 'select-answer': {
      const isCorrect = state.questions[state.currentQuestion].variants.find(
        (variant) => variant.id === action.payload.id
      )?.isCorrect;
      return {
        ...state,
        selectedVariant: action.payload.id,
        score: isCorrect ? state.score + state.questions[state.currentQuestion].score : state.score,
      };
    }
    case 'finish-quiz': {
      return {
        ...state,
        isFinished: true,
      };
    }
    default: {
      return state;
    }
  }
};

const QuizComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    if (timeRemaining > 0 && !state.isFinished) {
      const timer = setTimeout(() => setTimeRemaining((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      dispatch({ type: 'finish-quiz' });
    }
  }, [timeRemaining, state.isFinished]);

  const handleSelectAnswer = (id: number) => {
    dispatch({ type: 'select-answer', payload: { id } });
  };

  const handleNextQuestion = () => {
    if (!state.isFinished) {
      dispatch({ type: 'next-question', payload: { id: state.selectedVariant } });
      setTimeRemaining(30);
    }
  };

  if (state.isFinished) {
    return (
      <div className="w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
        <p className="text-lg">Your score: {state.score}</p>
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentQuestion];

  return (
    <div className="w-[800px] mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold mb-2">{currentQuestion.name}</h2>
        <p className="text-gray-600">Time remaining: {timeRemaining}s</p>
      </div>
      <div className="flex flex-col gap-4">
        {currentQuestion.variants.map((variant) => (
          <div
            key={variant.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all flex items-center gap-4 ${
              state.selectedVariant === variant.id
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => handleSelectAnswer(variant.id)}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                state.selectedVariant === variant.id ? 'bg-white text-green-500' : 'bg-gray-200'
              }`}
            >
              {state.selectedVariant === variant.id ? '✔' : variant.letter}
            </div>
            <span className="font-bold">{variant.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleNextQuestion}
          disabled={state.selectedVariant === null}
        >
          {state.currentQuestion === state.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;

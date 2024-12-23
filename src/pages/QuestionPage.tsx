import { QuestionProps } from "../dummyData/quizData";
import { checkIcon } from "../check";
import styles from "./questions.module.css";

const Question: React.FC<QuestionProps> = ({
  currentQuestion,
  state,
  onNextQuestion,
  onSelectAnswer,
  isFinished,
  timeRemaining,
}) => {
  const isVariantSelected = state.selectedVariant != null;
  const buttonText =
    state.currentQuestion === state.questions.length - 1
      ? "Finish"
      : "Continue";
  const lowTimeStyle = timeRemaining <= 3 ? styles.lowTime : "";

  if (!isFinished && timeRemaining) {
    return (
      <div className={styles.questionsContainer}>
        <h2>{currentQuestion.name}</h2>
        <p className={`${styles.timeRemain} ${lowTimeStyle}`}>
          {timeRemaining}
        </p>
        <div className={styles.answersContainer}>
          {currentQuestion.variants.map((variant) => {
            const isSelected = state.selectedVariant === variant.id;
            return (
              <div
                key={variant.id}
                className={`${styles.options} ${
                  isSelected ? styles.selectedAnswer : ""
                }`}
                onClick={() => onSelectAnswer(variant.id)}
              >
                <div
                  className={`${styles.circle} ${
                    isSelected ? styles.selected : ""
                  }`}
                >
                  {isSelected ? checkIcon : variant.letter}
                </div>
                <p>{variant.name}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={(event:any) => onNextQuestion(event)}
          className={`${styles.continueBtn} ${
            isVariantSelected ? styles.activeBtn : ""
          }`}
          disabled={!isVariantSelected}
        >
          {buttonText}
        </button>
      </div>
    );
  }
  return null; // Return nothing if quiz is finished or time is over
};

export default Question;

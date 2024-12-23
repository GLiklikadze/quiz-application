type Quiz = {
  id: number;
  name: string;
  questions: Questions[];
};

export type Questions = {
  id: number;
  score: number;
  name: string;
  variants: Variant[];
};

type Variant = {
  letter: string;
  id: number;
  name: string;
  isCorrect: boolean;
};
const geographyQuiz: Quiz = {
  id: 1,
  name: "Geography Quiz",
  questions: [
    {
      id: 1,
      score: 100,
      name: "What is the capital of France?",
      variants: [
        { letter: "A", id: 1, name: "Berlin", isCorrect: false },
        { letter: "B", id: 2, name: "Madrid", isCorrect: false },
        { letter: "C", id: 3, name: "Paris", isCorrect: true },
        { letter: "D", id: 4, name: "Rome", isCorrect: false },
      ],
    },
    {
      id: 2,
      score: 100,
      name: "Which river is the longest in the world?",
      variants: [
        { letter: "A", id: 1, name: "Amazon", isCorrect: true },
        { letter: "B", id: 2, name: "Nile", isCorrect: false },
        { letter: "C", id: 3, name: "Yangtze", isCorrect: false },
        { letter: "D", id: 4, name: "Mississippi", isCorrect: false },
      ],
    },
    {
      id: 3,
      score: 100,
      name: "Which country is known as the Land of the Rising Sun?",
      variants: [
        { letter: "A", id: 1, name: "China", isCorrect: false },
        { letter: "B", id: 2, name: "Japan", isCorrect: true },
        { letter: "C", id: 3, name: "Thailand", isCorrect: false },
        { letter: "D", id: 4, name: "South Korea", isCorrect: false },
      ],
    },
    {
      id: 4,
      score: 100,
      name: "What is the largest desert in the world?",
      variants: [
        { letter: "A", id: 1, name: "Sahara", isCorrect: false },
        { letter: "B", id: 2, name: "Arabian", isCorrect: false },
        { letter: "C", id: 3, name: "Gobi", isCorrect: false },
        { letter: "D", id: 4, name: "Antarctic", isCorrect: true },
      ],
    },
    {
      id: 5,
      score: 100,
      name: "Which continent has the most countries?",
      variants: [
        { letter: "A", id: 1, name: "Asia", isCorrect: false },
        { letter: "B", id: 2, name: "Africa", isCorrect: true },
        { letter: "C", id: 3, name: "Europe", isCorrect: false },
        { letter: "D", id: 4, name: "North America", isCorrect: false },
      ],
    },
    {
      id: 6,
      score: 100,
      name: "What is the smallest country in the world?",
      variants: [
        { letter: "A", id: 1, name: "Monaco", isCorrect: false },
        { letter: "B", id: 2, name: "Nauru", isCorrect: false },
        { letter: "C", id: 3, name: "Vatican City", isCorrect: true },
        { letter: "D", id: 4, name: "San Marino", isCorrect: false },
      ],
    },
    {
      id: 7,
      score: 100,
      name: "Which mountain range separates Europe and Asia?",
      variants: [
        { letter: "A", id: 1, name: "Andes", isCorrect: false },
        { letter: "B", id: 2, name: "Himalayas", isCorrect: false },
        { letter: "C", id: 3, name: "Ural", isCorrect: true },
        { letter: "D", id: 4, name: "Rockies", isCorrect: false },
      ],
    },
    {
      id: 8,
      score: 100,
      name: "What is the longest river in Europe?",
      variants: [
        { letter: "A", id: 1, name: "Danube", isCorrect: false },
        { letter: "B", id: 2, name: "Rhine", isCorrect: false },
        { letter: "C", id: 3, name: "Volga", isCorrect: true },
        { letter: "D", id: 4, name: "Elbe", isCorrect: false },
      ],
    },
    {
      id: 9,
      score: 100,
      name: "Which ocean is the largest?",
      variants: [
        { letter: "A", id: 1, name: "Atlantic", isCorrect: false },
        { letter: "B", id: 2, name: "Indian", isCorrect: false },
        { letter: "C", id: 3, name: "Arctic", isCorrect: false },
        { letter: "D", id: 4, name: "Pacific", isCorrect: true },
      ],
    },
    {
      id: 10,
      score: 100,
      name: "Which country is known for having the most volcanoes?",
      variants: [
        { letter: "A", id: 1, name: "Iceland", isCorrect: false },
        { letter: "B", id: 2, name: "Japan", isCorrect: true },
        { letter: "C", id: 3, name: "Italy", isCorrect: false },
        { letter: "D", id: 4, name: "Indonesia", isCorrect: false },
      ],
    },
  ],
};
export interface State {
  questions: Questions[];
  currentQuestion: number;
  selectedVariant: number | null;
  score: number;
  point: number;
  isFinished: boolean;
}
export interface QuestionProps {
  currentQuestion: Questions;
  state: State;
  onSelectAnswer: (id: number) => void;
  onNextQuestion: (id: number | null) => void;
  isFinished: boolean;
  timeRemaning: number;
}
export const initialState = {
  questions: geographyQuiz.questions,
  currentQuestion: 0,
  selectedVariant: null,
  score: 0,
  point: 0,
  isFinished: false,
};
export interface basicProps {
  isFinished: boolean;
  timeRemaning: number;
}
export interface ResultProps {
  style?: React.CSSProperties;
  text: string;
  svg: React.ReactNode;
  score?: number;
  point?: number;
}
export interface ProgressProps {
  currentQuestion: number;
}
export type actionType =
  | { type: "next-question"; payload: { id: number | null } }
  | { type: "select-answer"; payload: { id: number } }
  | { type: "finish-quiz" };
export default geographyQuiz;

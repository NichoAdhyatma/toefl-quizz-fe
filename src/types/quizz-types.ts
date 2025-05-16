export type QuizzOption = {
  id: string;
  value: string;
};

export type QuestionItem = {
  id: number;
  question: string;
  options: QuizzOption[];
  correct_answer: string;
  reason: string;
};

export type QuizzAnswer = {
  questionId: number;
  selectedAnswer: string;
};

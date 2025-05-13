import { computed } from "vue";
import { questions } from "@/data/question-mock";
import { useQuizzStore } from "@/stores/quizz-store";
import { useRouter } from "vue-router";
import type { QuizzAnswer } from "@/types/quizz-types";

export function useQuizzLogic() {
  const store = useQuizzStore();
  const router = useRouter();

  const getActiveQuestion = computed(() => {
    return questions[store.activeQuestionIndex];
  });

  const getCorrectAnswerOption = computed(() =>
    getActiveQuestion.value.options.find(
      (item) => item.id === getActiveQuestion.value.correct_answer
    )
  );

  const getCurrentAnswer = computed(() => {
    const selectedAnswer = store.answeredQuestions.find(
      (item) => item.questionId === getActiveQuestion.value.id
    );

    if (selectedAnswer) {
      return getActiveQuestion.value.options.find(
        (item) => item.id === selectedAnswer.selectedAnswer
      );
    }
    return null;
  });

  function goToNextQuestion() {
    if (store.activeQuestionIndex < questions.length - 1) {
      store.activeQuestionIndex++;
    } else {
      router.replace("/quizz-result");
    }
  }

  function goToPreviousQuestion() {
    if (store.activeQuestionIndex > 0) {
      store.activeQuestionIndex--;
    }
  }

  function checkAnswer() {
    store.setScore(0);

    questions.forEach((question) => {
      const selectedAnswer = store.answeredQuestions.find(
        (item) => item.questionId === question.id
      );

      if (selectedAnswer) {
        if (selectedAnswer.selectedAnswer === question.correct_answer) {
          store.score += 17;
        }
      }
    });
  }

  function submitAnswer(questions: QuizzAnswer) {
    const existingQuestion = store.answeredQuestions.find(
      (item) => item.questionId === questions.questionId
    );

    if (existingQuestion) {
      existingQuestion.selectedAnswer = questions.selectedAnswer;
    } else {
      store.answeredQuestions.push(questions);
    }
  }

  return {
    getActiveQuestion,
    getCorrectAnswerOption,
    checkAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    submitAnswer,
    getCurrentAnswer,
  };
}

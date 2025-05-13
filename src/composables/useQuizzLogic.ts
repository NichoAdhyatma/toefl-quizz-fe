// composables/useQuizzLogic.ts
import { computed } from "vue";
import { questions } from "@/data/question-mock";
import { useQuizzStore } from "@/stores/quizz-store";
import { useRouter } from "vue-router";

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

  function goToNextQuestion() {
    if (store.activeQuestionIndex < questions.length - 1) {
      store.activeQuestionIndex++;
    } else {
        router.replace('/quizz-result')
    }
  }

  function checkAnswer(): boolean {
    if (store.selectedAnswer === getActiveQuestion.value.correct_answer) {
      store.score += 40;
      return true;
    }
    return false;
  }

  return {
    getActiveQuestion,
    getCorrectAnswerOption,
    checkAnswer,
    goToNextQuestion
  };
}

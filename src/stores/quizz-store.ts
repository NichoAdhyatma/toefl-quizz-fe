import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizzStore = defineStore("quizz", () => {
  const activeQuestionIndex = ref<number>(0);

  const score = ref(0);

  const isShowAnswer = ref(false);

  const selectedAnswer = ref<string | null>(null);

  function setSelectedAnswer(answer: string | null) {
    selectedAnswer.value = answer;
  }

  function setScore(value: number) {
    score.value = value;
  }

  function setIsShowAnswer(value: boolean) {
    isShowAnswer.value = value;
  }

  function resetQuiz() {
    activeQuestionIndex.value = 0;
    score.value = 0;
    isShowAnswer.value = false;
    selectedAnswer.value = null;
  }

  return {
    activeQuestionIndex,
    selectedAnswer,
    setSelectedAnswer,
    resetQuiz,
    score,
    setScore,
    isShowAnswer,
    setIsShowAnswer,
  };
}, {
  persist: true
});

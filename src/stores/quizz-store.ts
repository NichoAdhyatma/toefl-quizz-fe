import type { QuizzAnswer } from "@/types/quizz-types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizzStore = defineStore(
  "quizz",
  () => {
    const activeQuestionIndex = ref<number>(0);

    const score = ref(0);

    const answeredQuestions = ref<QuizzAnswer[]>([]);

    function setScore(value: number) {
      score.value = value;
    }

    function resetQuiz() {
      activeQuestionIndex.value = 0;
      score.value = 0;
      answeredQuestions.value = [];
    }

    return {
      activeQuestionIndex,
      resetQuiz,
      score,
      setScore,
      answeredQuestions,
    };
  },
  {
    persist: {
      pick: ["activeQuestionIndex", "answeredQuestions", "score"],
    },
  }
);

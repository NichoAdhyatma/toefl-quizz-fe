import { computed } from "vue";
import type { QuizzOption } from "@/types/quizz-types";
import { useQuizzLogic } from "./useQuizzLogic";
import { useQuizzStore } from "@/stores/quizz-store";

export function useQuizzDisplay() {
  const { getActiveQuestion } = useQuizzLogic();

  const store = useQuizzStore();

  const getOptionString = (option?: QuizzOption) => {
    if (!option) return "";
    return `${option.id.toUpperCase()}. ${option.value}`;
  };

  const getActiveQuestionString = computed(() => {
    return `${store.activeQuestionIndex + 1}. ${
      getActiveQuestion.value.question
    }`;
  });

  return {
    getOptionString,
    getActiveQuestionString,
  };
}

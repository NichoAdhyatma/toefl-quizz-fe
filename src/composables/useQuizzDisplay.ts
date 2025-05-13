import { computed } from "vue";
import type { QuizzOption } from "@/types/quizz-types"; 
import { useQuizzLogic } from "./useQuizzLogic";

export function useQuizzDisplay() {
  const { getActiveQuestion } = useQuizzLogic();

  const getOptionString = (option?: QuizzOption) => {
    if (!option) return "";
    return `${option.id.toUpperCase()}. ${option.value}`;
  };

  const getActiveQuestionString = computed(() => {
    return `${getActiveQuestion.value.number}. ${getActiveQuestion.value.question}`;
  });

  return {
    getOptionString,
    getActiveQuestionString,
  };
}

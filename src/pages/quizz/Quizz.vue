<script setup lang="ts">
import Box from '@/components/layouts/Box.vue';
import { ref, watch } from 'vue';
import Typography from '@/components/ui/typography/Typography.vue';
import Button from '@/components/ui/button/Button.vue';
import { useQuizzStore } from '@/stores/quizz-store';
import { storeToRefs } from 'pinia';
import { useQuizzDisplay } from '@/composables/useQuizzDisplay';
import { useQuizzLogic } from '@/composables/useQuizzLogic';
import ScoreCard from '@/components/ScoreCard.vue';
import CorrectAnswerCard from '@/components/CorrectAnswerCard.vue';
import RadioOptions from '@/components/RadioOptions.vue';
import { questions } from '@/data/question-mock';
import type { QuestionItem } from '@/types/quizz-types';

const quizzStore = useQuizzStore()

const {
  activeQuestionIndex,
  score,
  answeredQuestions
} = storeToRefs(quizzStore)

const {
  getActiveQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  submitAnswer,
  getCurrentAnswer,
  checkAnswer,
  goToQuestion
} = useQuizzLogic()

const { getActiveQuestionString } = useQuizzDisplay()

const isShowAnswer = ref(false)

const selectedAnswer = ref<string | null>(null)

const handleClickButtonNext = () => {
  goToNextQuestion()
}

const handleClickButtonPrev = () => {
  goToPreviousQuestion()
}

watch(selectedAnswer, (newValue) => {
  if (newValue) {
    submitAnswer({
      questionId: getActiveQuestion.value.id,
      selectedAnswer: newValue,
    })

    checkAnswer()

    isShowAnswer.value = true
  } else {
    isShowAnswer.value = false
  }
})

watch(activeQuestionIndex, () => {
  if (getCurrentAnswer.value) {
    selectedAnswer.value = getCurrentAnswer.value.id

    isShowAnswer.value = true
  } else {
    selectedAnswer.value = null

    isShowAnswer.value = false
  }
})

const getButtonVariant = (question: QuestionItem) => {
  const alreadyAnswered = answeredQuestions.value.find((item) => item.questionId === question.id)

  if (getActiveQuestion.value.id === question.id) {
    return 'default'
  } else if (alreadyAnswered) {
    return 'success'
  } else {
    return 'outline'
  }
}

</script>

<template>
  <Box variant="row" class="p-4 space-x-4 mt-10 justify-center min-w-full flex-col sm:flex-row">
    <!-- Left Side Soal -->
    <Box variant="column" class="space-y-2 w-full">
      <Box variant="column" class="bg-white shadow-md rounded-lg space-y-4 w-full min-h-96 border p-8">
        <!-- Pertanyaan -->
        <Typography variant="textMd" weight="medium" v-html="getActiveQuestionString" />

        <!-- Pilihan Jawaban -->
        <RadioOptions :disabled="isShowAnswer" v-model="selectedAnswer" />

        <!-- Konten Asli -->
        <CorrectAnswerCard v-show="isShowAnswer" />
      </Box>

      <Box variant="row" class="mt-4 justify-end">
        <Button variant="secondary" @click="handleClickButtonPrev" :disabled="activeQuestionIndex === 0">
          Prev
        </Button>

        <Button @click="handleClickButtonNext">Next</Button>
      </Box>
    </Box>

    <Box variant='column' class="space-y-4 min-w-1/4">
      <Box class="bg-white shadow-md rounded-lg border grid grid-cols-5 gap-2 p-4">
        <Button v-for="(question, i) in questions" :variant="getButtonVariant(question)" :key="i"
          class="!w-full p-4 !h-12 flex items-center justify-center text-sm font-medium" @click="goToQuestion(i)">
          {{ i + 1 }}
        </Button>
      </Box>

      <ScoreCard :score="score" />
    </Box>
  </Box>
</template>

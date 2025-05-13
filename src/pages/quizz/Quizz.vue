<script setup lang="ts">
import Box from '@/components/layouts/Box.vue';
import Label from '@/components/ui/label/Label.vue';
import { RadioGroup } from '@/components/ui/radio-group';
import RadioGroupItem from '@/components/ui/radio-group/RadioGroupItem.vue';
import { watchEffect } from 'vue';
import Typography from '@/components/ui/typography/Typography.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import Button from '@/components/ui/button/Button.vue';
import { useQuizzStore } from '@/stores/quizz-store';
import { storeToRefs } from 'pinia';
import { useQuizzDisplay } from '@/composables/useQuizzDisplay';
import { useQuizzLogic } from '@/composables/useQuizzLogic';

const quizzStore = useQuizzStore()

// Destructure reaktif untuk state dan getter
const {
  selectedAnswer,
  score,
  isShowAnswer,
} = storeToRefs(quizzStore)

// Akses langsung untuk actions
const {

  setSelectedAnswer,
  setIsShowAnswer
} = quizzStore

const { checkAnswer, getActiveQuestion, getCorrectAnswerOption, goToNextQuestion, } = useQuizzLogic()

const { getOptionString, getActiveQuestionString } = useQuizzDisplay()

const handleClickButtonNext = () => {
  goToNextQuestion()
  setSelectedAnswer(null)
  setIsShowAnswer(false)
}

watchEffect(() => {
  if (selectedAnswer.value) {
    checkAnswer()
    setIsShowAnswer(true)
  }
})
</script>

<template>
  <Box variant="column" class="w-full justify-center items-center h-screen gap-10 flex-wrap">
    <Box variant="row" class="p-4 space-x-4 items-center justify-center flex-wrap">
      <!-- Left Side Soal -->
      <Box variant="column" class="space-y-2 w-96 h-fit">
        <!-- Pertanyaan -->
        <Typography variant="textMd" weight="medium" v-html="getActiveQuestionString" />



        <!-- Pilihan Jawaban -->
        <RadioGroup :disabled="isShowAnswer" v-model="selectedAnswer">
          <Box variant="column" class="space-y-4">
            <Box v-for="option in getActiveQuestion.options" :key="option.id" variant="row"
              class="items-center space-x-2">
              <RadioGroupItem :id="String(option.id)" :value="option.id" />
              <Label :for="String(option.id)" class="cursor-pointer">
                {{ getOptionString(option) }}
              </Label>
            </Box>
          </Box>
        </RadioGroup>

        <!-- Container dengan tinggi dan lebar tetap -->
        <Box class="mt-2 line-clamp-3 text-ellipsis overflow-hidden">
          <!-- Konten Asli -->
          <Box v-show="isShowAnswer" class=" w-full h-full">
            <Typography>
              ✅ Correct Answer: {{ getOptionString(getCorrectAnswerOption) }}
            </Typography>
            <Typography variant="textSm" weight="medium" class="text-gray-600 mt-2">
              {{ getActiveQuestion.reason }}
            </Typography>
          </Box>
        </Box>
      </Box>

      <!-- Score -->
      <Card class="w-80 pl-0 py-4 pr-20">
        <CardHeader>
          <CardTitle class="text-lg">Score :</CardTitle>
        </CardHeader>
        <CardContent>
          <Typography variant="displayMd" weight="semibold" class="text-green-500">
            {{ score }}
          </Typography>
        </CardContent>
      </Card>
    </Box>

    <!-- Tombol Next -->
    <Box class="w-10 h-10">
      <Button v-show="isShowAnswer" @click="handleClickButtonNext">Next</Button>
    </Box>
  </Box>
</template>

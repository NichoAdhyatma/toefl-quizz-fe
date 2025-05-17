<script setup lang="ts">
import Box from '@/components/layouts/Box.vue';
import Button from '@/components/ui/button/Button.vue';
import Typography from '@/components/ui/typography/Typography.vue';
import { useQuizzLogic } from '@/composables/quizz/useQuizzLogic';
import { router } from '@/router';
import { useQuizzStore } from '@/stores/quizz-store';
import { watchEffect } from 'vue';

const quizzStore = useQuizzStore()

const { checkAnswer } = useQuizzLogic()

const backToHome = () => {
    router.replace('/');

    quizzStore.resetQuiz()
}

watchEffect(() => {
    checkAnswer()
})

</script>

<template>
    <Box variant="column" class="w-full justify-center items-center h-screen gap-10 flex-wrap">
        <Typography variant="textLg" weight="medium">
            Yayyy You did it! You have completed the toefl quiz!
        </Typography>

        <Typography variant="displayMd" weight="semibold" class="text-green-600">
            Your Score is {{ quizzStore.score }}
        </Typography>

        <Button @click="backToHome">
            Back to Home
        </Button>

    </Box>
</template>

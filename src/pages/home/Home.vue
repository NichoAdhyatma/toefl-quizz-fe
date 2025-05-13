<script setup lang="ts">
import Box from '@/components/layouts/Box.vue';
import Button from '@/components/ui/button/Button.vue';
import { router } from '@/router';
import { useQuizzStore } from '@/stores/quizz-store';

const quizzStore = useQuizzStore()

const goToQuizz = () => {
    quizzStore.resetQuiz()
    
    router.push('/quizz');
}

</script>

<template>
    <Box variant="column" class="items-center justify-center h-screen">
        <h1>Take TOEFL Quizz Game</h1>

        <Button @click="goToQuizz">Start</Button>
    </Box>
</template>


<style scoped></style>
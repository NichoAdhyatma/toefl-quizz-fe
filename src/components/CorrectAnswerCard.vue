<script setup lang="ts">
import { useQuizzDisplay } from '@/composables/useQuizzDisplay';
import { useQuizzLogic } from '@/composables/useQuizzLogic';
import Box from './layouts/Box.vue';
import Typography from './ui/typography/Typography.vue';

const { getOptionString } = useQuizzDisplay()

const { getCorrectAnswerOption, getActiveQuestion } = useQuizzLogic()
</script>

<template>
    <Box variant="column" class="space-y-1">
        <Typography>
            ✅ Correct Answer: {{ getOptionString(getCorrectAnswerOption) }}
        </Typography>
        
        <Typography variant="textSm" weight="regular" class="text-gray-600">
            {{ getActiveQuestion.reason }}
        </Typography>
    </Box>
</template>

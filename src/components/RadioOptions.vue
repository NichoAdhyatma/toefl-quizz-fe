<script setup lang="ts">
import Box from './layouts/Box.vue';
import Label from './ui/label/Label.vue';
import RadioGroup from './ui/radio-group/RadioGroup.vue';
import RadioGroupItem from './ui/radio-group/RadioGroupItem.vue';
import { useQuizzLogic } from '@/composables/quizz/useQuizzLogic';
import { useQuizzDisplay } from '@/composables/quizz/useQuizzDisplay';

const { getActiveQuestion } = useQuizzLogic()

const { getOptionString } = useQuizzDisplay()

</script>

<template>
    <RadioGroup>
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
</template>


<style scoped></style>
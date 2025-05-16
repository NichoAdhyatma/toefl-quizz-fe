<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Typography } from './ui/typography';


defineProps<{ score: number }>()

</script>
<template>
    <Card class="pl-0 py-4 pr-20">
        <CardHeader>
            <CardTitle class="text-lg">Score :</CardTitle>
        </CardHeader>

        <CardContent>
            <Typography variant="displayMd" weight="semibold" class="text-green-600">
                {{ score }}
            </Typography>
        </CardContent>
    </Card>
</template>

<style scoped></style>
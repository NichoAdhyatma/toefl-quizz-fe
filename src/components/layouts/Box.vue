<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority';

const props = defineProps<{
    as?: keyof HTMLElementTagNameMap
    variant?: 'default' | 'row' | 'column'
}>()

const boxVariants = cva('', {
    variants: {
        variant: {
            default: '',
            row: 'flex flex-row gap-4',
            column: 'flex flex-col gap-4',
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const attrs = useAttrs()

const mergedAttrs = computed(() => {
    const { class: externalClass, ...rest } = attrs
    return {
        ...rest,
        class: cn(boxVariants({ variant: props.variant }), externalClass as string ?? ''),
    }
})

const tag = computed(() => props.as || 'div')

const elementRef = ref<HTMLElement | null>(null)

defineExpose({
    el: elementRef,
})
</script>

<template>
    <component :is="tag" v-bind="mergedAttrs" ref="elementRef">
        <slot />
    </component>
</template>

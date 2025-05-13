<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { typographyVariants, type TypographyVariants } from '.'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
    variant?: TypographyVariants['variant']
    weight?: TypographyVariants['weight']
    class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
    as: 'p',
})

</script>

<template>
    <Primitive data-slot="p" :as="as" :as-child="asChild"
        :class="cn(typographyVariants({ variant, weight }), props.class)">
        <slot />
    </Primitive>
</template>

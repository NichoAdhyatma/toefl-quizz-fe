import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const baseQuizzSchema = z.object({
    answer: z.string().min(1, 'Option answer is required'),
})

export const quizzSchema = toTypedSchema(baseQuizzSchema)

export type QuizzSchema = z.infer<typeof baseQuizzSchema>

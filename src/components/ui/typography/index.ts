import { cva, type VariantProps } from "class-variance-authority";

export { default as Typography } from './Typography.vue'

export const typographyVariants = cva("", {
  variants: {
    variant: {
      displayMd: "text-[36px] leading-[44px] tracking-[-0.02em]",
      displaySm: "text-[30px] leading-[38px] tracking-[0]",
      textLg:
        "font-inter font-semibold text-[18px] leading-[28px] tracking-[0]",
      textMd: "text-[16px] leading-[24px] tracking-[0]",
      textSm: "text-[14px] leading-[20px] tracking-[0]",
      textXs: "text-[12px] leading-[18px] tracking-[0]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "textMd",
    weight: "regular",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
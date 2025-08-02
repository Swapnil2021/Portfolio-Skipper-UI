"use client"

import { TextScroll } from "../ui/text-scroll"

export function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-white dark:text-white md:text-7xl md:leading-[5rem] w-full"
      text="Skiper UI  "
      default_velocity={10}
    />
  )
}

'use client'

import { useState } from "react"
import { useAppDispatch } from "@/hooks/useReduxStore"
import { setNumberImages } from "@/store/features/optionSlice"

type Props = {
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  value?: number
  onChange?: (e: any) => {
    payload: number;
    type: "options/setNumberImages";
  }
}

const RangeOptions = ({ min, max, step, disabled, value, onChange }: Props) => {
  return (
    <input type="range" min={min} max={max} step={step} disabled={disabled} value={value} onChange={onChange} className="w-full" />
  )
}

export default RangeOptions

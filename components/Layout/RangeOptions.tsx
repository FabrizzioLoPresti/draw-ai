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
}

const RangeOptions = ({ min, max, step, disabled, value }: Props) => {
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNumberImages(Number(e.target.value)))
  }

  return (
    <input type="range" min={min} max={max} step={step} disabled={disabled} value={value} onChange={handleChange} className="w-full" />
  )
}

export default RangeOptions

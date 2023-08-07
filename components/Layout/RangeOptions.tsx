'use client'

import { useState } from "react"

type Props = {
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  value?: number
  setValue?: React.Dispatch<React.SetStateAction<number>>
}

const RangeOptions = ({ min, max, step, disabled, value }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <input type="range" min={min} max={max} step={step} value={value} disabled={disabled} onChange={handleChange} className="w-full" />
  )
}

export default RangeOptions
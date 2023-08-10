'use client'

type Props = {
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  value?: number
  onChange?: (e: any) => {
    payload: number;
    type: ActionTypes;
  }
}

type ActionTypes = "options/setNumberImages" | "options/setWidth" | "options/setHeight" | "options/setCfgScale" | "options/setSteps"

const RangeOptions = ({ min, max, step, disabled, value, onChange }: Props) => {
  return (
    <input type="range" min={min} max={max} step={step} disabled={disabled} value={value} onInput={onChange} className="w-full" />
  )
}

export default RangeOptions

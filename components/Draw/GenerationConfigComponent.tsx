'use client'

import { useState } from 'react'
import Link from 'next/link'
import RangeOptions from '../Layout/RangeOptions'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxStore'
import { setNumberImages } from '@/store/features/optionSlice'

type Props = {}

const GenerationConfigComponent = (props: Props) => {
  const { numberImages } = useAppSelector(state => state.options.options)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <span className="text-xs font-extralight">
          Number of images to generate: {numberImages}
        </span>
        <RangeOptions 
          min={1}
          max={10}
          step={1}
          disabled={false}
          key={numberImages}
          value={numberImages}
          onChange={(e) => dispatch(setNumberImages(Number(e.target.value)))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Negative Prompt</p>
        <input
          type="text"
          name="negative"
          id="negative"
          placeholder="Leave blank if not need"
          className="input"
        />
      </div>
    </div>
  )
}

export default GenerationConfigComponent
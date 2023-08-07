import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Interfaces
// API Services

interface OptionState {
  prompt: string
  negativePrompt: string
  options: {
    numberImages: number
    width: number
    height: number
    cfgScale: number
    steps: number
    sampler: string,
    seed: number,
  },
  
}

const initialState: OptionState = {
  prompt: '',
  negativePrompt: '',
  options: {
    numberImages: 1,
    width: 512,
    height: 512,
    cfgScale: 1,
    steps: 1,
    sampler: 'bilinear',
    seed: 0,
  },
}

const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setPrompt(state, action: PayloadAction<string>) {
      state.prompt = action.payload
    },
    setNegativePrompt(state, action: PayloadAction<string>) {
      state.negativePrompt = action.payload
    },
    setNumberImages(state, action: PayloadAction<number>) {
      state.options.numberImages = action.payload
    },
    setWidth(state, action: PayloadAction<number>) {
      state.options.width = action.payload
    },
    setHeight(state, action: PayloadAction<number>) {
      state.options.height = action.payload
    },
    setCfgScale(state, action: PayloadAction<number>) {
      state.options.cfgScale = action.payload
    },
    setSteps(state, action: PayloadAction<number>) {
      state.options.steps = action.payload
    },
    setSampler(state, action: PayloadAction<string>) {
      state.options.sampler = action.payload
    },
    setSeed(state, action: PayloadAction<number>) {
      state.options.seed = action.payload
    }
  }
})

export const {
  setPrompt,
  setNegativePrompt,
  setNumberImages,
  setWidth,
  setHeight,
  setCfgScale,
  setSteps,
  setSampler,
  setSeed,
} = optionSlice.actions

export default optionSlice.reducer

// Funciones Asincronas (Thunks)
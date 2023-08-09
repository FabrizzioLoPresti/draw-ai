import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Interfaces
// API Services

interface StableDiffusionState {
  
}

const initialState: StableDiffusionState = {

}

const stableDiffusionSlice = createSlice({
  name: 'stableDiffusion',
  initialState,
  reducers: {

  },
})

export const {} = stableDiffusionSlice.actions

export default stableDiffusionSlice.reducer

// Async Thunks (API Services)
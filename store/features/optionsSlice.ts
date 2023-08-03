import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Interfaces
// Services API

interface OptionsState {

}

const initialState: OptionsState = {

}

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    // Reducers
  },
})

export const { } = optionsSlice.actions

export default optionsSlice.reducer
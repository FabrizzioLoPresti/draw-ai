import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Interfaces
// Services API

interface AuthState {

}

const initialState: AuthState = {

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducers
  },
})

export const { } = authSlice.actions

export default authSlice.reducer

// Funciones auxiliares de Auth API
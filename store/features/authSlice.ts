import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Interfaces
// API Services

interface AuthState {
}

const initialState: AuthState = {
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  }
})

export const {
  
} = authSlice.actions

export default authSlice.reducer

// Funciones Asincronas (Thunks)
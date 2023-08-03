import axios from '@/libs/axios'
// Interfaces

export const authUser = async (email: string, password: string) => {
  const response = await axios.post('/auth/login', { email, password })
  return response.data
}
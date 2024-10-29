import { MOCK_USER } from '../constants'
import { LoginFormData } from '../types/auth'

export const loginService = async (data: LoginFormData) => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
    return {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        name: 'Test User',
        email: MOCK_USER.email,
      },
    }
  }

  throw new Error('Invalid credentials')
}

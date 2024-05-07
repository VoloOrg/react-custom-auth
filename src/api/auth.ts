import { Profile } from 'store/types'
import { LoginFormValues } from 'types/auth'

export const login = async (credentials: Omit<LoginFormValues, 'rememberMe'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/login`, credentials)
  console.log({ credentials })

  const data: Profile = {
    id: 'temp-id',
    email: 'temp@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
  }
  return data
}

export const register = async (profileData: Omit<Profile, 'id'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/register`, profileData)
  console.log({ profileData })

  const data: Profile = {
    id: 'temp-id',
    email: 'temp@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
  }
  return data
}

export const logout = async (profileData: Profile) => {
  // const { data } = await axiosInstance.delete<Profile>(`/register`, profileData)
  console.log({ profileData })

  return true
}

export const sendResetPasswordInstruction = async (profileData: Profile) => {
  // const { data } = await axiosInstance.delete<Profile>(`/resetPassword`, profileData)
  console.log({ profileData })

  return true
}

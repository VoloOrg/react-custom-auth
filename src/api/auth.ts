import { Profile } from 'store/types'
import { InvitationFormValues, LoginFormValues, ResetPasswordFormValues } from 'types/auth'
import { DEFAULT_ADMIN, PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { sleep } from 'utils/commons'

export const getIsLoggedIn = async () => {
  // const { data } = await axiosInstance.get(`/isLoggedIn`)
  console.log('requesting is auth')
  await sleep(1000)
  return false
}

export const login = async (credentials: LoginFormValues) => {
  // const { data } = await axiosInstance.post<Profile>(`/login`, credentials)
  console.log({ credentials })

  const data: Profile = DEFAULT_ADMIN
  return data
}

export const register = async (profileData: Omit<Profile, 'id'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/register`, profileData)
  console.log({ profileData })

  const data: Profile = PROFILE_INITIAL_DATA
  return data
}

export const logout = async (profileData: Profile) => {
  // const { data } = await axiosInstance.delete<Profile>(`/register`, profileData)
  console.log({ profileData })

  return true
}

export const sendForgotPasswordInstruction = async (profileData: Profile) => {
  // const { data } = await axiosInstance.delete<Profile>(`/forgotPassword`, profileData)
  console.log({ profileData })

  return true
}

export const resetPassword = async (passwords: Omit<ResetPasswordFormValues, 'confirmNewPassword'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/resetPassword`, passwords)
  console.log({ passwords })

  return true
}

export const invite = async (profileData: Profile, invitationData: InvitationFormValues) => {
  // const { data } = await axiosInstance.post<Profile>(`/invite`, profileData)
  console.log({ profileData, invitationData })

  return true
}

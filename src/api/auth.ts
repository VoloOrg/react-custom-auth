import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { Profile } from 'store/types'
import { InvitationFormValues, LoginFormValues, ResetPasswordFormValues } from 'types/auth'
import axiosInstance from 'utils/api'

export const login = async (credentials: LoginFormValues) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/connect/token`, credentials)
  return data
}

export const register = async (profileData: Omit<Profile, 'id'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/register`, profileData)
  console.log({ profileData })

  const data: Profile = PROFILE_INITIAL_DATA
  return data
}

export const logout = async () => {
  const res = await axiosInstance.get(`/connect/logout`)
  console.log({ res })

  return true
}

export const sendForgotPasswordInstruction = async (payload: Pick<Profile, 'email'>) => {
  const res = await axiosInstance.post(`/connect/ForgotPassword`, payload)
  console.log({ res })

  return true
}

export const resetPassword = async (passwords: Omit<ResetPasswordFormValues, 'confirmNewPassword'>) => {
  // const { data } = await axiosInstance.post<Profile>(`/resetPassword`, passwords)
  console.log({ passwords })

  return true
}

export const invite = async (invitationData: InvitationFormValues) => {
  const res = await axiosInstance.post(`/Account/InviteUser`, invitationData)
  console.log({ res })

  return true
}

import { Profile } from 'store/types'
import { InvitationFormValues, LoginFormValues, ResetPasswordFormValues } from 'types/auth'
import axiosInstance from 'utils/api'

export const login = async (credentials: LoginFormValues) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/connect/token`, credentials)
  return data
}

export const register = async (profileData: Omit<Profile, 'id'>) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/Account/Register`, profileData)

  return data
}

export const logout = async () => {
  const { data } = await axiosInstance.get(`/auth/account/logout`)

  return data
}

export const sendForgotPasswordInstruction = async (payload: Pick<Profile, 'email'>) => {
  const { data } = await axiosInstance.post(`/auth/connect/ForgotPassword`, payload)

  return data
}

export const resetPassword = async (passwords: Omit<ResetPasswordFormValues, 'confirmPassword'>) => {
  const { data } = await axiosInstance.post<Profile>(`auth/Account/changepassword`, passwords)

  return data
}

export const invite = async (invitationData: InvitationFormValues) => {
  const res = await axiosInstance.post(`/auth/InviteUser`, invitationData)

  return res
}

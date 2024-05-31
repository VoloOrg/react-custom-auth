import { Profile } from 'store/types'
import {
  ChangePasswordFormValues,
  InvitationFormValues,
  LoginFormValues,
  ResetPasswordFormValues,
  VerifyTokenThunkArgs,
} from 'types/auth'
import axiosInstance from 'utils/api'

export const login = async (credentials: LoginFormValues) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/connect/token`, credentials)
  return data
}

export const register = async (profileData: Profile) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { role, ...payload } = profileData
  const { data } = await axiosInstance.post<Profile>(`/auth/connect/Register`, payload)

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

export const changePassword = async (passwords: Omit<ChangePasswordFormValues, 'confirmPassword'>) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/Account/changepassword`, passwords)

  return data
}

export const invite = async (invitationData: InvitationFormValues) => {
  const res = await axiosInstance.post(`/auth/InviteUser`, invitationData)

  return res
}

export const verifyToken = async (payload: VerifyTokenThunkArgs) => {
  const res = await axiosInstance.post(`/auth/connect/VerifyToken`, payload)

  return res
}

export const resetPassword = async (payload: ResetPasswordFormValues) => {
  const { data } = await axiosInstance.post<Profile>(`/auth/connect/ResetPassword`, payload)

  return data
}

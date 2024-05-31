import { Profile } from 'store/types'

export type LoginFormValues = {
  email: Profile['email']
  password: string
}

export type InvitationFormValues = Pick<Profile, 'email'>

export type ChangePasswordFormValues = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export type ResetPasswordFormValues = {
  newPassword: string
  confirmPassword: string
  email: string
  token: string
}

export type InvitationValues = ResetPasswordFormValues & Pick<Profile, 'role'>

export type VerifyTokenThunkArgs = {
  email: string
  token: string
  type: string
}

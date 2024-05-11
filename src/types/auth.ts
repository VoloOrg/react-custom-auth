import { Profile } from 'store/types'

export type LoginFormValues = {
  email: Profile['email']
  password: string
}

export type InvitationFormValues = Pick<Profile, 'email' | 'role'>

export type ResetPasswordFormValues = {
  oldPassword?: string
  newPassword: string
  confirmNewPassword: string
}

import { Profile } from 'store/types'

export type LoginFormValues = {
  email: Profile['email']
  password: string
}

export type InvitationFormValues = Pick<Profile, 'email' | 'role'>

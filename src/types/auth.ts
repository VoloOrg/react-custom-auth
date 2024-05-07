import { Profile } from 'store/types'

export type LoginFormValues = {
  email: Profile['email']
  password: string
  rememberMe: boolean
}

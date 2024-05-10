import { ROLES } from 'constants/profile'

export type ProfileSlice = {
  data: Profile
  isLoggedIn: boolean
  isPending: boolean
  errorMessage: Error['message']
}

export type Profile = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: Role
}

export type Role = typeof ROLES[keyof typeof ROLES]

export type ProfileActionPayloads = {
  setProfileData: Partial<Profile>
  setIsLoggedIn: ProfileSlice['isLoggedIn']
}

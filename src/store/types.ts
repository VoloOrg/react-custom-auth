export type ProfileSlice = {
  data: Profile
  isLoggedIn: boolean
  isPending: boolean
  errorMessage: Error['message']
};

export type Profile = {
  id: string
  firstName: string
  lastName: string
  email: string
}

export type ProfileActionPayloads = {
  setProfileData: Partial<Profile>
}


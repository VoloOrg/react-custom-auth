import { Profile } from 'store/types'
import axiosInstance from 'utils/api'

export const getProfile = async () => {
  const { data } = await axiosInstance.get<Profile>(`/auth/account/CurrentUser`)
  return data
}

import { Profile } from 'store/types'
import axiosInstance from 'utils/api'

export const getProfile = async (): Promise<Profile> => {
  const { data } = await axiosInstance.get(`/auth/account/CurrentUser`)
  return data.data
}

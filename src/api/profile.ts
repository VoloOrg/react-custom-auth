import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { Profile } from 'store/types'

export const getProfile = async () => {
  // const { data } = await axiosInstance.get(`/profile`)
//   console.log({ data })

  const data: Profile = PROFILE_INITIAL_DATA
  
  return data
}
import { Profile } from 'store/types'
import { DEFAULT_ADMIN } from 'constants/auth/commons'

export const getProfile = async () => {
  // const { data } = await axiosInstance.get(`/profile`)
  //   console.log({ data })
console.log('requesting profile data')
  await new Promise(r => setTimeout((r), 2000))

  const data: Profile = DEFAULT_ADMIN

  return data
}

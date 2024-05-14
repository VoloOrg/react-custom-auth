import { Profile } from 'store/types'
import { DEFAULT_ADMIN } from 'constants/auth/commons'
import { sleep } from 'utils/commons'

export const getProfile = async () => {
  // const { data } = await axiosInstance.get(`/profile`)

  console.log('requesting profile data')
  await sleep(1000)

  const data: Profile = DEFAULT_ADMIN

  return data
}

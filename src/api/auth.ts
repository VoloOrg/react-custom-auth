import { LOGIN_FORM_INITIAL_VALUES } from 'constants/auth/login'
import { Profile } from 'store/types'

export const login = async (credentials: typeof LOGIN_FORM_INITIAL_VALUES) => {
  // const { data } = await axiosInstance.post<Profile>(`/login`, credentials)
  console.log({credentials});
  
  const data: Profile = {
    id: 'temp-id',
    email: 'temp@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
  }
  return data
}

import { login } from 'api/auth'
import { LOGIN_FORM_INITIAL_VALUES } from 'constants/auth/login'
import { createAppAsyncThunk } from 'utils/store'
import { setIsLoggedIn, setProfileData } from './slice'
import { Profile } from './types'

export const loginThunk = createAppAsyncThunk<Profile, typeof LOGIN_FORM_INITIAL_VALUES>(
  'login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const profile = await login(credentials)
      dispatch(setProfileData(profile))
      console.log({ profile })

      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      const error = e as Error
      return rejectWithValue(error)
    }
  }
)

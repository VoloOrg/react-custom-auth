import { login, logout, register, sendResetPasswordInstruction } from 'api/auth'
import { createAppAsyncThunk } from 'utils/store'
import { setIsLoggedIn, setProfileData } from './slice'
import { Profile } from './types'
import { LoginFormValues } from 'types/auth'
import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'

export const loginThunk = createAppAsyncThunk<Profile, LoginFormValues>(
  'login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const profile = await login(credentials)
      dispatch(setProfileData(profile))

      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      const error = e as Error
      return rejectWithValue(error)
    }
  }
)

export const registerThunk = createAppAsyncThunk<Profile, Omit<Profile, 'id'>>(
  'register',
  async (profileData, { rejectWithValue, dispatch }) => {
    try {
      const profile = await register(profileData)
      dispatch(setProfileData(profile))

      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      const error = e as Error
      return rejectWithValue(error)
    }
  }
)

export const logoutThunk = createAppAsyncThunk<void, void>(
  'logout',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = getState()
      await logout(data)

      dispatch(setProfileData(PROFILE_INITIAL_DATA))
      dispatch(setIsLoggedIn(false))

    } catch (e) {
      const error = e as Error
      return rejectWithValue(error)
    }
  }
)

export const resetPasswordThunk = createAppAsyncThunk<void, Profile['email']>(
  'logout',
  async (email, { rejectWithValue, dispatch }) => {
    try {
      await sendResetPasswordInstruction(email)

      dispatch(setProfileData(PROFILE_INITIAL_DATA))

    } catch (e) {
      const error = e as Error
      return rejectWithValue(error)
    }
  }
)

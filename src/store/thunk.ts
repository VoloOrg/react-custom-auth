import { invite, login, logout, register, sendForgotPasswordInstruction } from 'api/auth'
import { LoginFormValues } from 'types/auth'
import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { createAppAsyncThunk } from 'utils/store'
import { setIsLoggedIn, setProfileData } from './slice'
import { Profile } from './types'
import { getProfile } from 'api/profile'

export const loginThunk = createAppAsyncThunk<Profile, LoginFormValues>(
  'login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const profile = await login(credentials)
      dispatch(setProfileData(profile))

      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      return rejectWithValue(e as Error)
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
      return rejectWithValue(e as Error)
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
      return rejectWithValue(e as Error)
    }
  }
)

export const forgotPasswordThunk = createAppAsyncThunk<void, Profile['email']>(
  'forgotPassword',
  async (email, { rejectWithValue, dispatch, getState }) => {
    try {
      const profileData = {
        ...getState().data,
        email
      }

      await sendForgotPasswordInstruction(profileData)

      dispatch(setProfileData(PROFILE_INITIAL_DATA))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const inviteUserThunk = createAppAsyncThunk<void, Pick<Profile, 'email' | 'role'>>(
  'forgotPassword',
  async (invitationData, { rejectWithValue, dispatch, getState }) => {
    try {
      const profileData = getState().data

      await invite(profileData, invitationData)

      dispatch(setProfileData(PROFILE_INITIAL_DATA))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getProfileThunk = createAppAsyncThunk<Profile, void>(
  'getProfile',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      
      const profile = await getProfile()
      dispatch(setProfileData(profile))

      dispatch(setIsLoggedIn(true))

      return profile

    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

import { getIsLoggedIn, invite, login, logout, register, resetPassword, sendForgotPasswordInstruction } from 'api/auth'
import { getProfile } from 'api/profile'
import { LoginFormValues, ResetPasswordFormValues } from 'types/auth'
import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { createAppAsyncThunk } from 'utils/store'
import { setIsLoggedIn, setProfileData } from './slice'
import { Profile } from './types'

export const getIsLoggedInThunk = createAppAsyncThunk<boolean, void>(
  'getIsLoggedIn',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const isLoggedIn = await getIsLoggedIn()

      dispatch(setIsLoggedIn(isLoggedIn))

      return isLoggedIn
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

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

      dispatch(setIsLoggedIn(false))
      dispatch(setProfileData(PROFILE_INITIAL_DATA))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const forgotPasswordThunk = createAppAsyncThunk<void, Profile['email']>(
  'forgotPassword',
  async (email, { rejectWithValue, getState }) => {
    try {
      const profileData = {
        ...getState().data,
        email,
      }
      await sendForgotPasswordInstruction(profileData)
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const resetPasswordThunk = createAppAsyncThunk<void, Omit<ResetPasswordFormValues, 'confirmNewPassword'>>(
  'resetPassword',
  async (passwords, { rejectWithValue }) => {
    try {
      await resetPassword(passwords)
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const inviteThunk = createAppAsyncThunk<void, Pick<Profile, 'email' | 'role'>>(
  'invite',
  async (invitationData, { rejectWithValue, getState }) => {
    try {
      const profileData = getState().data
      await invite(profileData, invitationData)
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

      return profile
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

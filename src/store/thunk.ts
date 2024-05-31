import { AxiosError, isAxiosError } from 'axios'
import {
  changePassword,
  invite,
  login,
  logout,
  register,
  resetPassword,
  sendForgotPasswordInstruction,
  verifyToken,
} from 'api/auth'
import { getProfile } from 'api/profile'
import {
  ChangePasswordFormValues,
  InvitationValues,
  LoginFormValues,
  ResetPasswordFormValues,
  VerifyTokenThunkArgs,
} from 'types/auth'
import { PROFILE_INITIAL_DATA } from 'constants/auth/commons'
import { createAppAsyncThunk } from 'utils/store'
import { setIsLoggedIn, setProfileData } from './slice'
import { Profile } from './types'

export const loginThunk = createAppAsyncThunk<Profile, LoginFormValues>(
  'login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const profile = await login(credentials)
      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const registerThunk = createAppAsyncThunk<Profile, InvitationValues>(
  'register',
  async (profileData, { rejectWithValue, dispatch }) => {
    try {
      const profile = await register(profileData)
      console.log({ profile })

      dispatch(setProfileData({ email: profileData.email, role: profileData.role }))

      dispatch(setIsLoggedIn(true))

      return profile
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const logoutThunk = createAppAsyncThunk<void, void>('logout', async (_, { rejectWithValue, dispatch }) => {
  try {
    await logout()

    dispatch(setIsLoggedIn(false))
    dispatch(setProfileData(PROFILE_INITIAL_DATA))
  } catch (e) {
    const error = e as Error | AxiosError
    const processedError = isAxiosError(error) ? error?.response?.data : error
    return rejectWithValue(processedError)
  }
})

export const forgotPasswordThunk = createAppAsyncThunk<void, Profile['email']>(
  'forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      await sendForgotPasswordInstruction({ email })
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const changePasswordThunk = createAppAsyncThunk<void, Omit<ChangePasswordFormValues, 'confirmPassword'>>(
  'changePassword',
  async (passwords, { rejectWithValue }) => {
    try {
      await changePassword(passwords)
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const resetPasswordThunk = createAppAsyncThunk<void, ResetPasswordFormValues>(
  'resetPassword',
  async (payload, { rejectWithValue }) => {
    try {
      await resetPassword(payload)
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const inviteThunk = createAppAsyncThunk<void, Pick<Profile, 'email'>>(
  'invite',
  async (invitationData, { rejectWithValue }) => {
    try {
      await invite(invitationData)
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

export const verifyTokenThunk = createAppAsyncThunk<void, VerifyTokenThunkArgs>(
  'verifyToken',
  async (data, { rejectWithValue }) => {
    try {
      await verifyToken(data)
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
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
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)

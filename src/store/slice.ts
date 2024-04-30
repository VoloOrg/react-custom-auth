import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileActionPayloads, ProfileSlice } from './types'

const initialState: ProfileSlice = {
  data: {
    id: '',
    lastName: '',
    firstName: '',
    email: '',
  },
  isLoggedIn: false,
  isPending: false,
  errorMessage: '',
}

const isFulfilledAction = (action: Action) => action.type.endsWith('/fulfilled')
const isPendingAction = (action: Action) => action.type.endsWith('/pending')
const isRejectedAction = (action: Action) => action.type.endsWith('/rejected')

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, { payload }: PayloadAction<ProfileActionPayloads['setProfileData']>) => {
      state.data = {
        ...state.data,
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPendingAction, (state) => {
        state.isPending = true
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isPending = false
      })
      .addMatcher(isRejectedAction, (state) => {
        state.isPending = false
      })
  },
})

export const { setProfileData } = profileSlice.actions

export default profileSlice.reducer

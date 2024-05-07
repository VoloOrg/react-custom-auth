import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit'
import { isFulfilledAction, isPendingAction, isRejectedAction } from 'utils/store'
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
    setIsLoggedIn: (state, { payload }: PayloadAction<ProfileActionPayloads['setIsLoggedIn']>) => {
      state.isLoggedIn = payload
    },
    resetErrorMessage: (state) => {
      state.errorMessage = ''
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
      .addMatcher(isRejectedAction, (state, action: PayloadAction<SerializedError>) => {
        state.isPending = false
        state.errorMessage = action.payload.message ?? 'Rejected Action.'
      })
  },
})

export const { setProfileData, setIsLoggedIn, resetErrorMessage } = profileSlice.actions

export default profileSlice.reducer

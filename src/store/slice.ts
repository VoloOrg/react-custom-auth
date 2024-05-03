import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileActionPayloads, ProfileSlice } from './types'
import { isFulfilledAction, isPendingAction, isRejectedAction } from 'utils/store'

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
      console.log({payload});
      
      state.isLoggedIn = payload
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
      .addMatcher(isRejectedAction, (state, payload) => {
        console.log({state, payload});
        
        state.isPending = false
      })
  },
})

export const { setProfileData, setIsLoggedIn } = profileSlice.actions

export default profileSlice.reducer

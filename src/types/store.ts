import { SerializedError } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'store/main'

export type ThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  rejectValue: SerializedError
}

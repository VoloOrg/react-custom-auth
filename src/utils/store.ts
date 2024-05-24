import { Action, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { ThunkConfig } from 'types/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>()

export const processThunkError = (e: unknown): Error | AxiosError => {
  const error = e as Error | AxiosError
  const processedError = isAxiosError(error) ? (error?.response?.data?.message ? error?.response?.data: error) : error;
  
  return processedError
}

export const isFulfilledAction = (action: Action) => action.type.endsWith('/fulfilled')
export const isPendingAction = (action: Action) => action.type.endsWith('/pending')
export const isRejectedAction = (action: Action) => action.type.endsWith('/rejected')

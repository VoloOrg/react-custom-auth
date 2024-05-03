import { Action, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'types/store';

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>();

export const isFulfilledAction = (action: Action) => action.type.endsWith('/fulfilled')
export const isPendingAction = (action: Action) => action.type.endsWith('/pending')
export const isRejectedAction = (action: Action) => action.type.endsWith('/rejected')
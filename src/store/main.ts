import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slice';

export const store = configureStore({
  reducer: profileReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
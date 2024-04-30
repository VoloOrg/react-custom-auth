import { RootState } from './main'

export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn
export const selectIsPending = (state: RootState) => state.isPending

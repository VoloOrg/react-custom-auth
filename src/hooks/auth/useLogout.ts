import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutThunk } from 'store/thunk'
import { PUBLIC_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from '../useAppDispatch'
import useLocalStorage from '../useLocalStorage'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [, , removeRememberMeFlag] = useLocalStorage('isLoggedIn', false)

  return useCallback(async () => {
    const res = await dispatch(logoutThunk())
    if (isRejectedAction(res)) return

    removeRememberMeFlag()
    navigate(PUBLIC_PAGES.login)
  }, [dispatch, navigate, removeRememberMeFlag])
}

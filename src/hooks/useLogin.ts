import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginThunk } from 'store/thunk'
import { LoginFormValues } from 'types/auth'
import { PRIVATE_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from './useAppDispatch'
import useLocalStorage from './useLocalStorage'

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [, setRememberMe] = useLocalStorage('rememberMe', false)

  return useCallback(
    async (values: LoginFormValues) => {
      const res = await dispatch(loginThunk(values))
      if (isRejectedAction(res)) return

      if (values.rememberMe) setRememberMe(values.rememberMe)
      navigate(PRIVATE_PAGES.home)
    },
    [dispatch, navigate, setRememberMe]
  )
}

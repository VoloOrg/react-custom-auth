import { useNavigate } from 'react-router-dom'
import { loginThunk } from 'store/thunk'
import { LoginFormValues } from 'types/auth'
import { PRIVATE_PAGES } from 'constants/pages'
import { useAppDispatch } from './useAppDispatch'
import { useCallback } from 'react'
import useLocalStorage from './useLocalStorage'
import { isRejectedAction } from 'utils/store'

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [, setRememberMe] = useLocalStorage('rememberMe', false)

  return useCallback(async (values: LoginFormValues) => {
    const res = await dispatch(loginThunk(values))
    if (isRejectedAction(res)) return;
    
    if(values.rememberMe) setRememberMe(values.rememberMe)
    navigate(PRIVATE_PAGES.home)
  }, [dispatch, navigate, setRememberMe])
}

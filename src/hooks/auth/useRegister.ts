import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerThunk } from 'store/thunk'
import { REGISTRATION_FORM_INITIAL_VALUES } from 'constants/auth/registration'
import { PUBLIC_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from '../useAppDispatch'

export const useRegister = (email: string, token: string) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return useCallback(
    async (values: typeof REGISTRATION_FORM_INITIAL_VALUES) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { newPassword, confirmPassword } = values

      const res = await dispatch(
        registerThunk({
          newPassword,
          confirmPassword,
          email,
          token,
        })
      )

      if (isRejectedAction(res)) return

      navigate(PUBLIC_PAGES.confirmation)
    },
    [dispatch, navigate, email, token]
  )
}

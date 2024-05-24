import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPasswordThunk } from 'store/thunk'
import { RESET_PASSWORD_FORM_INITIAL_VALUES } from 'constants/auth/resetPassword'
import { PUBLIC_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from '../useAppDispatch'

export const useResetPassword = (email: string, token: string) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return useCallback(
    async (values: typeof RESET_PASSWORD_FORM_INITIAL_VALUES) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      console.log({ email, token, ...values })

      const res = await dispatch(resetPasswordThunk({ email, token, ...values }))
      if (isRejectedAction(res)) return

      navigate(PUBLIC_PAGES.confirmation)
    },
    [dispatch, navigate, email, token]
  )
}

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPasswordThunk } from 'store/thunk'
import { PUBLIC_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from './useAppDispatch'
import { Profile } from 'store/types'

export const useResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return useCallback(
    async (values: Pick<Profile, 'email'>) => {
      const res = await dispatch(resetPasswordThunk(values.email))
      if (isRejectedAction(res)) return

      navigate(PUBLIC_PAGES.confirmation, {
        state: {
          origin: PUBLIC_PAGES.forgotPassword,
        },
      })
    },
    [dispatch, navigate]
  )
}

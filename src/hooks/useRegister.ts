import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerThunk } from 'store/thunk'
import { REGISTRATION_FORM_INITIAL_VALUES } from 'constants/auth/registration'
import { PUBLIC_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from './useAppDispatch'

export const useRegister = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return useCallback(
    async (values: typeof REGISTRATION_FORM_INITIAL_VALUES) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...profileData } = values

      const res = await dispatch(registerThunk(profileData))
      if (isRejectedAction(res)) return

      navigate(PUBLIC_PAGES.confirmation, {
        state: {
          origin: PUBLIC_PAGES.registration,
        },
      })
    },
    [dispatch, navigate]
  )
}

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { inviteUserThunk } from 'store/thunk'
import { Profile } from 'store/types'
import { PRIVATE_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from './useAppDispatch'

export const useInvite = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return useCallback(
    async (values: Pick<Profile, 'email' | 'role'>) => {
      const res = await dispatch(inviteUserThunk(values))
      if (isRejectedAction(res)) return

      navigate(PRIVATE_PAGES.invitationConfirmed, {
        state: {
          invitationData: values,
        },
      })
    },
    [dispatch, navigate]
  )
}

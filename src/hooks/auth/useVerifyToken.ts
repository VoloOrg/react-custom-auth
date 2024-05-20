import { useCallback } from 'react'
import { verifyTokenThunk } from 'store/thunk'
import { PRIVATE_PAGES } from 'constants/pages'
import { isRejectedAction } from 'utils/store'
import { useAppDispatch } from '../useAppDispatch'
import { useQueryParams } from 'hooks/useQueryParams'

export const useVerifyToken = () => {
  const dispatch = useAppDispatch()
  const searchParams = useQueryParams()

  return useCallback(async () => {
    const verifyTokenAction = await dispatch(
      verifyTokenThunk({
        email: searchParams.email,
        token: searchParams.token,
        type: searchParams.type,
      })
    )

    if (isRejectedAction(verifyTokenAction)) window.location.href = PRIVATE_PAGES.home

  }, [dispatch, searchParams])
}

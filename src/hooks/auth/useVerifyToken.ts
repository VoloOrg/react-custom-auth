import { useQueryParams } from 'hooks/useQueryParams'
import { useCallback } from 'react'
import { verifyTokenThunk } from 'store/thunk'
import { useAppDispatch } from '../useAppDispatch'

export const useVerifyToken = () => {
  const dispatch = useAppDispatch()
  const searchParams = useQueryParams()

  return useCallback(async () => {
    
    await dispatch(
      verifyTokenThunk({
        email: searchParams.email,
        token: searchParams.token,
        type: searchParams.type,
      })
    )

  }, [dispatch, searchParams.email, searchParams.token, searchParams.type])
}

import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import FloatingError from 'components/FloatingError'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsPending } from 'store/selectors'
import { Loader } from 'components/ui/loader'

const RoutesContainer: FC = () => {

  const isPending = useAppSelector(selectIsPending)

  if(isPending) return <Loader />

  return (
    <>
      <FloatingError />
      <Outlet />
    </>
  )
}

export default RoutesContainer

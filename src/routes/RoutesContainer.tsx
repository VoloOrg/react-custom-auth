import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import FloatingError from 'components/FloatingError'

const RoutesContainer: FC = () => {
  return (
    <>
      <FloatingError />
      <Outlet />
    </>
  )
}

export default RoutesContainer

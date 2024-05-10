import FloatingError from 'components/FloatingError'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const RoutesContainer: FC = () => {

    

  return (
    <>

      <FloatingError />
      <Outlet />
    </>
  )
}

export default RoutesContainer

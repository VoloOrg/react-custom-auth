import FloatingError from 'components/FloatingError'
import { Loader } from 'components/ui/loader'
import { FC } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

const RoutesContainer: FC = () => {
  const navigation = useNavigation();
  
  const isLoading = navigation.state === 'loading';
  if (isLoading) return <Loader />

  return (
    <>
      <FloatingError />
      <Outlet />
    </>
  )
}

export default RoutesContainer
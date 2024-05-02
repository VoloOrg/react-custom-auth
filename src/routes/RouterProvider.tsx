import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsLoggedIn } from 'store/selectors'

const Router: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const routes = isLoggedIn ? PRIVATE_ROUTES : PUBLIC_ROUTES
console.log({isLoggedIn});

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default Router

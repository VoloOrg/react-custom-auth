import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes'

const Router: FC = () => {
  const routes = true ? PUBLIC_ROUTES : PRIVATE_ROUTES

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default Router

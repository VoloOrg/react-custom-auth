import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes'

const Router: FC = () => {
  const router = createBrowserRouter(ROUTES)
  return <RouterProvider router={router} />
}

export default Router

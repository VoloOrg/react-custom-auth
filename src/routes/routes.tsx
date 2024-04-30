import { Navigate, RouteObject } from 'react-router-dom'
import Error from 'components/ui/error'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import { ConfirmationPage, ForgotPasswordPage, HomePage, LoginPage, RegistrationPage } from './Pages'

export const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: PUBLIC_PAGES.login,
    element: LoginPage,
    errorElement: <Error />,
  },
  {
    path: PUBLIC_PAGES.forgotPassword,
    element: ForgotPasswordPage,
    errorElement: <Error />,
  },
  {
    path: PUBLIC_PAGES.registration,
    element: RegistrationPage,
    errorElement: <Error />,
  },
  {
    path: PUBLIC_PAGES.confirmation,
    element: ConfirmationPage,
    errorElement: <Error />,
  },
  {
    path: '*',
    element: <Navigate to={PUBLIC_PAGES.login} />,
    errorElement: <Error />,
  },
]

export const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: PRIVATE_PAGES.home,
    element: HomePage,
  },
  { path: '*', element: <Navigate to={PRIVATE_PAGES.home} /> },
]

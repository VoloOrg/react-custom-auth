import { Navigate, RouteObject } from 'react-router-dom'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import FloatingError from 'components/FloatingError'
import { ConfirmationPage, ForgotPasswordPage, HomePage, LoginPage, RegistrationPage } from './Pages'
import RouterErrorElement from './RouterErrorElement'

export const ROUTES: RouteObject[] = [
  {
    element: <FloatingError />,
    errorElement: <RouterErrorElement />,
    children: [
      {
        path: PUBLIC_PAGES.login,
        element: LoginPage,
      },
      {
        path: PUBLIC_PAGES.forgotPassword,
        element: ForgotPasswordPage,
      },
      {
        path: PUBLIC_PAGES.registration,
        element: RegistrationPage,
      },
      {
        path: PUBLIC_PAGES.confirmation,
        element: ConfirmationPage,
      },
      {
        path: PRIVATE_PAGES.home,
        element: HomePage,
      },
      { path: '*', element: <Navigate to={PRIVATE_PAGES.home} /> },
      {
        path: '*',
        element: <Navigate to={PUBLIC_PAGES.login} />,
      },
    ],
  },
]

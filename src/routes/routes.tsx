import { Navigate, RouteObject } from 'react-router-dom'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import { ConfirmationPage, ForgotPasswordPage, HomePage, InvitationConfirmedPage, InvitationPage, LoginPage, RegistrationPage } from './Pages'
import RouterErrorElement from './RouterErrorElement'
import RoutesContainer from './RoutesContainer'

export const ROUTES: RouteObject[] = [
  {
    element: <RoutesContainer />,
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
      {
        path: PRIVATE_PAGES.invitation,
        element: InvitationPage,
      },
      {
        path: PRIVATE_PAGES.invitationConfirmed,
        element: InvitationConfirmedPage,
      },
      { path: '*', element: <Navigate to={PRIVATE_PAGES.home} /> },
      {
        path: '*',
        element: <Navigate to={PUBLIC_PAGES.login} />,
      },
    ],
  },
]

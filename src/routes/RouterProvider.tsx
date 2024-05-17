import { FC } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import { getProfileThunk } from 'store/thunk'
import { useAppDispatch } from 'hooks/useAppDispatch'
import useLocalStorage from 'hooks/useLocalStorage'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import { Loader } from 'components/ui/loader'
import {
  ConfirmationPage,
  ForgotPasswordPage,
  HomePage,
  InvitationConfirmedPage,
  InvitationPage,
  LoginPage,
  RegistrationPage,
  ResetPasswordPage,
} from './Pages'
import RouterErrorElement from './RouterErrorElement'
import RoutesContainer from './RoutesContainer'

const Router: FC = () => {
  const dispatch = useAppDispatch()
  const [isLoggedIn] = useLocalStorage('isLoggedIn', false)

  const router = createBrowserRouter([
    {
      element: <RoutesContainer />,
      errorElement: <RouterErrorElement />,
      loader: async () => {
        if (isLoggedIn) return defer(await dispatch(getProfileThunk()))
        return false
      },
      children: [
        {
          path: PUBLIC_PAGES.login,
          element: LoginPage,
        },
        {
          path: PUBLIC_PAGES.resetPassword,
          element: ResetPasswordPage,
        },
        {
          path: PUBLIC_PAGES.forgotPassword,
          element: ForgotPasswordPage,
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
          path: PRIVATE_PAGES.invitationConfirm,
          element: InvitationConfirmedPage,
        },
      ],
    },
    {
      path: PUBLIC_PAGES.registration,
      element: RegistrationPage,
    },
    { path: '*', element: <Navigate to={PRIVATE_PAGES.home} /> },
  ])

  return <RouterProvider fallbackElement={<Loader />} router={router} />
}

export default Router

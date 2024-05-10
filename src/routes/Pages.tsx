import { lazy } from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { WithSuspense } from './WithSuspense'

export const RegistrationPage = WithSuspense(lazy(() => import('pages/registration')))
export const LoginPage = WithSuspense(lazy(() => import('pages/login')))
export const ConfirmationPage = WithSuspense(lazy(() => import('pages/confirmation')))
export const ForgotPasswordPage = WithSuspense(lazy(() => import('pages/forgotPassword')))
export const HomePage = <ProtectedRoute>{WithSuspense(lazy(() => import('pages/home')))}</ProtectedRoute>
export const InvitationPage = <ProtectedRoute>{WithSuspense(lazy(() => import('pages/invitation')))}</ProtectedRoute>
export const InvitationConfirmedPage = (
  <ProtectedRoute>{WithSuspense(lazy(() => import('pages/invitationConfirmed')))}</ProtectedRoute>
)

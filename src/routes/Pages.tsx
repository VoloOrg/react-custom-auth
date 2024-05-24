import { lazy } from 'react'
import { WithSuspense } from './WithSuspense'

export const RegistrationPage = WithSuspense(lazy(() => import('pages/registration')))
export const LoginPage = WithSuspense(lazy(() => import('pages/login')))
export const ConfirmationPage = WithSuspense(lazy(() => import('pages/confirmation')))
export const ForgotPasswordPage = WithSuspense(lazy(() => import('pages/forgotPassword')))
export const ResetPasswordPage = WithSuspense(lazy(() => import('pages/resetPassword')))
export const HomePage = WithSuspense(lazy(() => import('pages/home')))
export const InvitationPage = WithSuspense(lazy(() => import('pages/invitation')))
export const InvitationConfirmedPage = WithSuspense(lazy(() => import('pages/invitationConfirm')))

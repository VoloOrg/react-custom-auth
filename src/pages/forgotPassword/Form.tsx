import { FC } from 'react'
import { useFormik } from 'formik'
import { Box, Button, TextField } from '@mui/material'
import { selectIsPending } from 'store/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { useResetPassword } from 'hooks/useResetPassword'
import {
  FORGOT_PASSWORD_FORM_INITIAL_VALUES,
  FORGOT_PASSWORD_FORM_VALIDATION_SCHEMA,
} from 'constants/auth/forgotPassword'
import { PUBLIC_PAGES } from 'constants/pages'
import AppNavLink from '../../components/ui/appNavLink'

export const ForgotPasswordForm: FC = () => {
  const isPending = useAppSelector(selectIsPending)
  const resetPassword = useResetPassword()

  const formik = useFormik({
    initialValues: FORGOT_PASSWORD_FORM_INITIAL_VALUES,
    validationSchema: FORGOT_PASSWORD_FORM_VALIDATION_SCHEMA,
    onSubmit: resetPassword,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="email"
          placeholder="Enter Email"
          disabled={isPending}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AppNavLink primary to={PUBLIC_PAGES.login} disabled={isPending}>
            Login
          </AppNavLink>
          <AppNavLink primary to={PUBLIC_PAGES.registration} disabled={isPending}>
            Register
          </AppNavLink>
        </Box>
        <Button type="submit" variant="contained" disabled={isPending}>
          Send Email
        </Button>
      </Box>
    </form>
  )
}

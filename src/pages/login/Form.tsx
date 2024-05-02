import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import AppNavLink from 'components/ui/appNavLink'
import { LOGIN_FORM_INITIAL_VALUES, LOGIN_FORM_VALIDATION_SCHEMA } from 'constants/auth/login'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { loginThunk } from 'store/thunk'

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: LOGIN_FORM_INITIAL_VALUES,
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    onSubmit: async (values) => {
      const res = await dispatch(loginThunk(values)).unwrap()
      if (res.id) {
        navigate(PRIVATE_PAGES.home)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            label="Remember Me"
            name="rememberMe"
            control={<Checkbox />}
            value={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          <AppNavLink primary to={PUBLIC_PAGES.forgotPassword}>
            Forgot Password
          </AppNavLink>
        </Box>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </form>
  )
}

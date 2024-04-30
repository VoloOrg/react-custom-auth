import { Typography } from '@mui/material'
import AppNavLink from 'components/ui/appNavLink'
import { PUBLIC_PAGES } from 'constants/pages'
import { RegistrationForm } from './Form'

const Registration = () => {
  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Welcome to Registration
      </Typography>
      <Typography paragraph>
        Already have an account?{' '}
        <AppNavLink primary to={PUBLIC_PAGES.login}>
          Login
        </AppNavLink>
      </Typography>
      <RegistrationForm />
    </>
  )
}

export default Registration

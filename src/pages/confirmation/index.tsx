import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { PUBLIC_PAGES } from 'constants/pages'
import AppNavLink from 'components/ui/appNavLink'

const Confirmation = () => {
  const location = useLocation()
  const titleText =
    location?.state?.origin === PUBLIC_PAGES.forgotPassword
      ? 'Follow the Instructions in the Email'
      : 'Thank you for Registering!'

  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        {titleText}
      </Typography>
      <Typography>
        We've sent a confirmation email to the address you provided. Please check your inbox to confirm your email
        address and complete the registration process.
      </Typography>
      <Box marginTop={1}>
        <AppNavLink primary to={PUBLIC_PAGES.login}>
          Back to Login Page
        </AppNavLink>
      </Box>
    </Box>
  )
}

export default Confirmation

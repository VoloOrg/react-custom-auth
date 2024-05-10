import { Box, Typography } from '@mui/material'
import AppNavLink from 'components/ui/appNavLink'
import { PUBLIC_PAGES } from 'constants/pages'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsLoggedIn } from 'store/selectors'

const Confirmation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Follow the Instructions in the Email.
      </Typography>
      <Typography>
        We've sent a confirmation email to the address you provided. Please check your inbox to confirm your email
        address and complete the process.
      </Typography>
      <Box marginTop={1}>
        <AppNavLink primary to={PUBLIC_PAGES.login}>
          Back to {isLoggedIn ? 'Profile' : 'Login'}
        </AppNavLink>
      </Box>
    </Box>
  )
}

export default Confirmation

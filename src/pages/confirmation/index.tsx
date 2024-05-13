import { Box, Typography } from '@mui/material'
import AppNavLink from 'components/ui/appNavLink'
import { PRIVATE_PAGES } from 'constants/pages'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsLoggedIn } from 'store/selectors'

const Confirmation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  return (
    <Box textAlign="center">
      <Typography align="center" variant="h4" gutterBottom>
        Follow the Instructions in the Email.
      </Typography>
      <Typography>
        We've sent a confirmation email to the address you provided. Please check your inbox to confirm your email
        address and complete the process.
      </Typography>
      <Box marginTop={1}>
        <AppNavLink primary to={PRIVATE_PAGES.home}>
          Back to {isLoggedIn ? 'Profile' : 'Login'}
        </AppNavLink>
      </Box>
    </Box>
  )
}

export default Confirmation

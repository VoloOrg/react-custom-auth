import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { PRIVATE_PAGES } from 'constants/pages'
import AppNavLink from 'components/ui/appNavLink'

const InvitationConfirm = () => {
  const location = useLocation()
  const invitationData = location?.state?.invitationData
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Invitation is Sent!
      </Typography>
      <Typography>
        You have successfully invited {invitationData.email} with a role {invitationData.role}
      </Typography>
      <Box display="flex" gap={2} justifyContent="center" marginTop={1}>
        <AppNavLink primary to={PRIVATE_PAGES.home}>
          Back to Profile
        </AppNavLink>
        <AppNavLink primary to={PRIVATE_PAGES.invitation}>
          Invite more Users
        </AppNavLink>
      </Box>
    </Box>
  )
}

export default InvitationConfirm

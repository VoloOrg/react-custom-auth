import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { selectIsPending, selectProfileData } from 'store/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { useLogout } from 'hooks/useLogout'
import { PRIVATE_PAGES, PUBLIC_PAGES } from 'constants/pages'
import { ROLES } from 'constants/profile'
import AppNavLink from 'components/ui/appNavLink'

const HomePage: FC = () => {
  const { firstName, lastName, email, role } = useAppSelector(selectProfileData)
  const isPending = useAppSelector(selectIsPending)

  const handleLogoutClick = useLogout()

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={1}>
      <Typography align="center" variant="h4" gutterBottom>
        Welcome {firstName} {lastName}
      </Typography>
      {role === ROLES.admin && (
        <AppNavLink primary to={PRIVATE_PAGES.invitation}>
          Invite
        </AppNavLink>
      )}
      <Box>
        <AppNavLink primary to={PUBLIC_PAGES.forgotPassword} disabled={isPending}>
          Reset Password
        </AppNavLink>
      </Box>
      <Typography paragraph>{email}</Typography>
      <Button variant="contained" onClick={handleLogoutClick} disabled={isPending}>
        Log out
      </Button>
    </Box>
  )
}

export default HomePage

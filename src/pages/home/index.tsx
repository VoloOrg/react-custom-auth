import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { selectProfileData } from 'store/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { useLogout } from 'hooks/useLogout'

const HomePage: FC = () => {
  const { firstName, lastName, email } = useAppSelector(selectProfileData)

  const handleLogoutClick = useLogout()

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
      <Typography align="center" variant="h4" gutterBottom>
        Welcome {firstName} {lastName}
      </Typography>
      <Typography paragraph>{email}</Typography>
      <Button variant="contained" onClick={handleLogoutClick}>
        Log out
      </Button>
    </Box>
  )
}

export default HomePage

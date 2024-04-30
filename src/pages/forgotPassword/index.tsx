import { Typography } from '@mui/material'
import { ForgotPasswordForm } from './Form'

const ForgotPassword = () => {
  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Set a New Password
      </Typography>
      <ForgotPasswordForm />
    </>
  )
}

export default ForgotPassword

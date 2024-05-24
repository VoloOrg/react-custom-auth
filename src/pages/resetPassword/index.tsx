import { Typography } from '@mui/material'
import { useQueryParams } from 'hooks/useQueryParams'
import { ResetPasswordForm } from './Form'

const ResetPassword = () => {
  const queryParams = useQueryParams()

  const email = queryParams.email
  const token = queryParams.token.replace(/ /gi, '+')

  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Reset your password
      </Typography>
      <Typography align="center" gutterBottom>
        Please enter new password and confirm it to recover your account.
      </Typography>
      <ResetPasswordForm email={email} token={token} />
    </>
  )
}

export default ResetPassword

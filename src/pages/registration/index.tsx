import { Typography } from '@mui/material'
import { useQueryParams } from 'hooks/useQueryParams'
import { ROLES } from 'constants/profile'
import { RegistrationForm } from './Form'

const Registration = () => {
  const queryParams = useQueryParams()
  const roleNames = Object.keys(ROLES) as (keyof typeof ROLES)[]
  const email = queryParams.email
  const token = queryParams.token.replace(/ /gi, '+')

  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Welcome to Registration
      </Typography>
      <Typography paragraph textAlign="center">
        Your email <strong>{email}</strong> <br /> with a role{' '}
        <strong>{roleNames.find((key) => ROLES[key] === +queryParams.role)}</strong> has been successfully invited to
        register.
      </Typography>
      <RegistrationForm email={email} token={token} />
    </>
  )
}

export default Registration

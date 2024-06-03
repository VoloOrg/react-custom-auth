import { Typography } from '@mui/material'
import { Loader } from 'components/ui/loader'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsPending } from 'store/selectors'
import { LoginForm } from './Form'

const Login = () => {
  const isPending = useAppSelector(selectIsPending)

  if (isPending) return <Loader />

  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        You Are Welcome
      </Typography>
      <LoginForm />
    </>
  )
}

export default Login

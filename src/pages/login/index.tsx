import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import useLocalStorage from 'hooks/useLocalStorage'
import { PRIVATE_PAGES } from 'constants/pages'
import { LoginForm } from './Form'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectIsPending } from 'store/selectors'
import { Loader } from 'components/ui/loader'

const Login = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const isPending = useAppSelector(selectIsPending)

  useEffect(() => {
    const redirectToProfileLoggedInUser = async () => {
      if (isLoggedIn) {
        setIsLoggedIn(true)
        navigate(PRIVATE_PAGES.home)
      }
    }
    redirectToProfileLoggedInUser()
  }, [isLoggedIn, navigate, setIsLoggedIn])

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

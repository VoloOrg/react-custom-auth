import { Typography } from '@mui/material'
import { LoginForm } from './Form'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getIsLoggedInThunk } from 'store/thunk'
import useLocalStorage from 'hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { PRIVATE_PAGES } from 'constants/pages'
import { useEffect } from 'react'

const Login = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  
  useEffect(() => {
    const redirectToProfileLoggedInUser = async () => {
      const isLoggedIn = await dispatch(getIsLoggedInThunk())
      console.log({isLoggedIn});
      
      if(isLoggedIn) {
        setIsLoggedIn(true)
        navigate(PRIVATE_PAGES.home)
      }
    }
    redirectToProfileLoggedInUser()
  }, [dispatch, navigate, setIsLoggedIn])

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

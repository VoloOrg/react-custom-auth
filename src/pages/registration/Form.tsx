import { Box, Button, TextField } from '@mui/material'
import {
  REGISTRATION_FORM_INITIAL_VALUES,
  REGISTRATION_FORM_TEMPLATE,
  REGISTRATION_FORM_VALIDATION_SCHEMA,
} from 'constants/auth/registration'
import { useFormik } from 'formik'
import { useRegister } from 'hooks/auth/useRegister'
import { useVerifyToken } from 'hooks/auth/useVerifyToken'
import { useAppSelector } from 'hooks/useAppSelector'
import { FC, useEffect } from 'react'
import { selectIsPending } from 'store/selectors'

export const RegistrationForm: FC = () => {
  const isPending = useAppSelector(selectIsPending)
  const register = useRegister()
  const verifyToken = useVerifyToken()


  const formik = useFormik({
    initialValues: REGISTRATION_FORM_INITIAL_VALUES,
    validationSchema: REGISTRATION_FORM_VALIDATION_SCHEMA,
    onSubmit: register,
  })

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display='flex' flexDirection='column' gap={2}>
        {REGISTRATION_FORM_TEMPLATE.map((field) => {
          const { name, type, placeholder } = field
          return (
            <TextField
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              disabled={isPending}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={!!formik.errors[name]}
              helperText={formik.errors[name]}
            />
          )
        })}
        <Button type='submit' variant='contained' disabled={isPending}>
          Register
        </Button>
      </Box>
    </form>
  )
}

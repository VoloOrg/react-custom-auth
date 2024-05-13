import { FC } from 'react'
import { useFormik } from 'formik'
import { Box, Button, TextField } from '@mui/material'
import { selectIsPending } from 'store/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRegister } from 'hooks/auth/useRegister'
import {
  REGISTRATION_FORM_INITIAL_VALUES,
  REGISTRATION_FORM_TEMPLATE,
  REGISTRATION_FORM_VALIDATION_SCHEMA,
} from 'constants/auth/registration'

export const RegistrationForm: FC = () => {
  const isPending = useAppSelector(selectIsPending)
  const register = useRegister()

  const formik = useFormik({
    initialValues: REGISTRATION_FORM_INITIAL_VALUES,
    validationSchema: REGISTRATION_FORM_VALIDATION_SCHEMA,
    onSubmit: register,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
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
        <Button type="submit" variant="contained" disabled={isPending}>
          Register
        </Button>
      </Box>
    </form>
  )
}

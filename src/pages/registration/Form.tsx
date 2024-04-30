import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import {
  REGISTRATION_FORM_INITIAL_VALUES,
  REGISTRATION_FORM_TEMPLATE,
  REGISTRATION_FORM_VALIDATION_SCHEMA,
} from 'constants/auth/registration'
import { PUBLIC_PAGES } from 'constants/pages'
import { useFormik } from 'formik'

export const RegistrationForm: FC = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: REGISTRATION_FORM_INITIAL_VALUES,
    validationSchema: REGISTRATION_FORM_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log({ values })
      navigate(PUBLIC_PAGES.confirmation)
    },
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
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={!!formik.errors[name]}
              helperText={formik.errors[name]}
            />
          )
        })}
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Box>
    </form>
  )
}

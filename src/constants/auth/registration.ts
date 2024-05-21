import { object, ref } from 'yup'
import { COMMON_SCHEMA_GENERATORS } from './commons'

export const REGISTRATION_FORM_INITIAL_VALUES = {
  // not implemented on backend
  // firstName: '',
  // lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const REGISTRATION_FORM_TEMPLATE = [
  // not implemented on backend
  // {
  //   name: 'firstName',
  //   type: 'text',
  //   placeholder: 'Enter First Name',
  // },
  // {
  //   name: 'lastName',
  //   type: 'text',
  //   placeholder: 'Enter Last Name',
  // },
  // {
  //   name: 'email',
  //   type: 'text',
  //   placeholder: 'Enter Email',
  // },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter Password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
] as const

export const REGISTRATION_FORM_VALIDATION_SCHEMA = object({
  // not implemented on backend
  // firstName: generateRequiredStringSchema('First Name'),
  // lastName: generateRequiredStringSchema('Last Name'),
  email: COMMON_SCHEMA_GENERATORS.email,
  password: COMMON_SCHEMA_GENERATORS.password,
  confirmPassword: COMMON_SCHEMA_GENERATORS.password.oneOf([ref('password')], 'Passwords must match'),
})

import { object, ref } from 'yup'
import { COMMON_SCHEMA_GENERATORS } from './commons'

export const RESET_PASSWORD_FORM_INITIAL_VALUES = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
}

export const RESET_PASSWORD_FORM_VALIDATION_SCHEMA = object({
  oldPassword: COMMON_SCHEMA_GENERATORS.password,
  newPassword: COMMON_SCHEMA_GENERATORS.password,
  confirmNewPassword: COMMON_SCHEMA_GENERATORS.password.oneOf([ref('newPassword')], 'Passwords must match'),
})

export const RESET_PASSWORD_FORM_TEMPLATE = [
  {
    name: 'oldPassword',
    placeholder: 'Enter Old Password',
  },
  {
    name: 'newPassword',
    placeholder: 'Enter New Password',
  },
  {
    name: 'confirmNewPassword',
    placeholder: 'Confirm New Password',
  },
] as const

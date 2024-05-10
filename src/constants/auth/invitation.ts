import { object, mixed } from 'yup'
import { COMMON_SCHEMA_GENERATORS } from './commons'
import { ROLES } from 'constants/profile'

export const INVITATION_FORM_INITIAL_VALUES = {
  email: '',
  role: '',
} as const

export const INVITATION_FORM_VALIDATION_SCHEMA = object({
  email: COMMON_SCHEMA_GENERATORS.email,
  role: mixed().oneOf(Object.values(ROLES)),
})

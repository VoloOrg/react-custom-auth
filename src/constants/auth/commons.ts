import { generateRequiredStringSchema } from 'utils/commons';

export const COMMON_SCHEMA_GENERATORS = {
  email: generateRequiredStringSchema("email").email("Enter a valid email"),
  password: generateRequiredStringSchema("password").min(
    8,
    "Password should be of minimum 8 characters length"
  ),
};

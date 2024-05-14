import { string } from 'yup'
import { capitalize } from '@mui/material'

export const generateRequiredStringSchema = (fieldName: string) => {
  return string().required(`${capitalize(fieldName)} is required`)
}

export const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms))
} 
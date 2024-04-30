import { capitalize } from "@mui/material";
import { string } from "yup";

export const generateRequiredStringSchema = (fieldName: string) => {
  return string().required(`${capitalize(fieldName)} is required`);
};

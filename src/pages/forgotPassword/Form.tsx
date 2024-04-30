import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AppNavLink from "../../components/ui/appNavLink";
import { FORGOT_PASSWORD_FORM_INITIAL_VALUES, FORGOT_PASSWORD_FORM_VALIDATION_SCHEMA } from 'constants/auth/forgotPassword';
import { PUBLIC_PAGES } from 'constants/pages';

export const ForgotPasswordForm: FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: FORGOT_PASSWORD_FORM_INITIAL_VALUES,
    validationSchema: FORGOT_PASSWORD_FORM_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log({values});
      navigate(PUBLIC_PAGES.confirmation);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AppNavLink primary to={PUBLIC_PAGES.login}>
            Login
          </AppNavLink>
          <AppNavLink primary to={PUBLIC_PAGES.registration}>
            Register
          </AppNavLink>
        </Box>
        <Button type="submit" variant="contained">
          Send Email
        </Button>
      </Box>
    </form>
  );
};

import { Typography } from "@mui/material";
import AppNavLink from 'components/ui/appNavLink';
import { LoginForm } from './Form';
import { PUBLIC_PAGES } from 'constants/pages';

const Login = () => {
  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Welcome Back
      </Typography>
      <Typography paragraph>
        Don't have an account?{" "}
        <AppNavLink primary to={PUBLIC_PAGES.registration}>
          Create Now!
        </AppNavLink>
      </Typography>
      <LoginForm />
    </>
  );
};

export default Login;

import { Box, Typography } from "@mui/material";
import AppNavLink from 'components/ui/appNavLink';
import { AUTH_CONFIRMATION_DETAILS } from 'constants/confirmations';
import { useSearchParams } from "react-router-dom";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const texts =
    AUTH_CONFIRMATION_DETAILS[searchParams.get("type") ?? "register"];

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Please check your email
      </Typography>
      <Typography mb={1}>Recovery link has been sent to your email</Typography>
      <AppNavLink primary to={texts.redirectUrl}>
        {texts.buttonText}
      </AppNavLink>
    </Box>
  );
};

export default Confirmation;

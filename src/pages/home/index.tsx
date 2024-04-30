import { Box, Button, Typography } from "@mui/material";
import { FC } from 'react';

const HomePage: FC = () => {
  
  const handleLogoutClick = () => {
    console.log('logged out!')
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      flexDirection='column'
    >
      <Typography align="center" variant="h4" gutterBottom>
        Welcome to your profile
      </Typography>
      <Typography paragraph>
        Some description
      </Typography>    
      <Button variant='contained' onClick={handleLogoutClick}>
        Log out
      </Button>
    </Box>
  );
};

export default HomePage;

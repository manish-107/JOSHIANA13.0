import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const Nav = () => {
  return (
    <Box sx={{margin:"30px"}} >
      <AppBar position="static" sx={{ backgroundColor: "#2b313660", boxShadow: "none",padding:"10px", borderRadius: "30px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" sx={{backgroundColor:"gray"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;

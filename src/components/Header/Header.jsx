import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WindowAuthorization from '../WindowAuthorization/WindowAuthorization';

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Log in</Button>
          <Button color="inherit" onClick={handleOpen}>Sign up</Button>
          <WindowAuthorization open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

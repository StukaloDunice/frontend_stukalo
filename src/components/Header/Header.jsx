import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import PropTypes from 'prop-types';
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Sign in</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// Header.propTypes = {
//   name: PropTypes.string.isRequired,
// };
export default Header;

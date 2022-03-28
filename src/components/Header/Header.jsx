import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import WindowAuthorization from '../WindowAuthorization/WindowAuthorization';
import { requestSignOut } from '../../redux/actions/actionsAuthorization';

import './style.css';

function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authUser);

  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">News</Link>
            </Typography>
            {!auth && (
              <>
                <Button
                  color="inherit"
                  className="log-in"
                  onClick={() => {
                    handleOpen();
                    setTarget('sign-up');
                  }}
                >
                  Sign up
                </Button>
                <Button
                  color="inherit"
                  className="sign-in"
                  onClick={() => {
                    handleOpen();
                    setTarget('sign-in');
                  }}
                >
                  Sign in
                </Button>
              </>
            )}
            {auth && (
              <>
                <Button
                  color="inherit"
                  className="sign-out"
                  // onClick={() => {
                  //   <Link to="/user">Home</Link>;
                  // }}
                >
                  <Link to={`/users/${auth.id}`}>My Profile</Link>
                </Button>
                <Button
                  color="inherit"
                  className="sign-out"
                  onClick={() => {
                    dispatch(requestSignOut());
                  }}
                >
                  <Link to="/">Sign out</Link>
                </Button>
              </>
            )}
            <WindowAuthorization open={open} target={target} handleClose={handleClose} />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { requestReg } from '../../redux/actions/actionsRegistration';
import { requestAuth } from '../../redux/actions/actionsAuthorization';

function WindowAuthorization(props) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.authUser);
  const { open, handleClose, target } = props;
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 30) {
      errors.password = 'Must be 15 characters or less';
    }
    if (values.value === 'sign-up') {
      if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 20) {
        errors.username = 'Must be 20 characters or less';
      }
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      value: '',
      email: '',
      username: '',
      password: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (target === 'sign-up') {
        dispatch(requestReg(values));
      } else {
        dispatch(requestAuth(values));
      }
      resetForm();
    },
  });
  formik.values.value = target;
  // useEffect(() => {
  //   formik.resetForm();
  // }, [target]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{target === 'sign-up' ? 'Sign up' : 'Sign in'}</DialogTitle>
        {error && (<Alert severity="error">{error.message}</Alert>)}
        <DialogContent>
          {target === 'sign-up' ? (
            <TextField
              error={!!((formik.touched.username && formik.errors.username))}
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
              name="username"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          ) : null}
          <TextField
            error={!!((formik.touched.email && formik.errors.email))}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!((formik.touched.password && formik.errors.password))}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </DialogContent>
        {loading
      && <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{target === 'sign-up' ? 'sign up' : 'sign in'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
WindowAuthorization.propTypes = {
  target: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default WindowAuthorization;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Button, TextField, Dialog, DialogActions, DialogContent,
  DialogTitle, CircularProgress, Box, Alert,
} from '@mui/material';

import { requestReg } from '../../redux/actions/actionsRegistration';
import { requestAuth } from '../../redux/actions/actionsAuthorization';

function WindowAuthorization(props) {
  const dispatch = useDispatch();
  const { auth, loading, error } = useSelector((state) => state.authUser);
  const { open, handleClose, target } = props;
  useEffect(() => {
    handleClose();
  }, [auth]);
  const currentForm = target === 'sign-up' ? 'Sign up' : 'Sign in';

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .when('value', {
        is: 'sign-up',
        then: Yup.string()
          .min(1, 'Too Short!')
          .max(30, 'Too Long!')
          .required('Required'),
      }),
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      value: target,
      email: '',
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      if (target === 'sign-up') {
        dispatch(requestReg(values));
      } else {
        dispatch(requestAuth(values));
      }
      resetForm();
    },
  });
  useEffect(() => {
    formik.resetForm();
  }, [target]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{currentForm}</DialogTitle>
        {error && (<Alert severity="error">{error}</Alert>)}
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
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{currentForm}</Button>
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

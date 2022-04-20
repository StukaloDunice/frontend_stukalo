import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Button, TextField, Dialog, DialogActions, DialogContent,
  DialogTitle, CircularProgress, Box, Alert, Input,
} from '@mui/material';

import { requestEditingUser } from '../../redux/actions/actionsUser';

function WindowChangeUser(props) {
  const dispatch = useDispatch();

  const {
    current, error, loading,
  } = useSelector((state) => state.authUser);

  const {
    open, handleClose,
  } = props;

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(1, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    file: Yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      username: current.username,
      file: null,
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(requestEditingUser({ ...values, id: current.id }));
      resetForm();
      handleClose();
    },
  });

  const changeFile = useCallback((event) => {
    const [files] = event.target.files;
    formik.values.file = files;
  }, [formik.values]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit} encType=" multipart/form-data ">
        <DialogTitle>Editing user</DialogTitle>
        {error && (<Alert severity="error">{error}</Alert>)}
        <DialogContent>
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
          <Input
            error={!!((formik.touched.file && formik.errors.file))}
            accept="image/*"
            id="file"
            type="file"
            fullWidth
            name="file"
            onBlur={formik.handleBlur}
            onChange={changeFile}
          />
        </DialogContent>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Change</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
WindowChangeUser.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default WindowChangeUser;

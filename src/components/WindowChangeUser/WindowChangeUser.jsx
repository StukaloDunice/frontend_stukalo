import React, { useCallback } from 'react';
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
import Input from '@mui/material/Input';

import { editingUserRequest } from '../../redux/actions/actionsUser';

function WindowChangeUser(props) {
  const dispatch = useDispatch();
  const { current, error, loading } = useSelector((state) => state.authUser);
  const {
    open, handleClose,
  } = props;
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 20) {
      errors.username = 'Must be 20 characters or less';
    }
    if (!values.file) {
      errors.file = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: current.username,
      file: null,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(editingUserRequest(values));
      resetForm();
    },
  });
  const submitFile = useCallback((event) => {
    const data = new FormData();
    const [files] = event.target.files;
    data.append('avatar', files);
    console.log(data);
    formik.initialValues.file = files;
  }, [formik.initialValues.file]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
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
            onChange={(event) => {
              submitFile(event);
              console.log(formik.initialValues.file);
            }}
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
  // current: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   username: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   avatar: PropTypes.isRequired,
  // }).isRequired,
};

export default WindowChangeUser;

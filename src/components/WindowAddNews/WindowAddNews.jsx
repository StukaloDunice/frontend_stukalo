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

import { editingUserRequest } from '../../redux/actions/actionsUser';

function WindowAddNews(props) {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.authUser);
  const {
    open, handleClose,
  } = props;
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.content) {
      errors.content = 'Required';
    }
    if (!values.tags) {
      errors.tags = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tags: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(editingUserRequest(values));
      resetForm();
    },
  });
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Add news</DialogTitle>
        {error && (<Alert severity="error">{error}</Alert>)}
        <DialogContent>
          <TextField
            error={!!((formik.touched.title && formik.errors.title))}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!((formik.touched.content && formik.errors.content))}
            margin="dense"
            id="content"
            label="Content"
            type="content"
            fullWidth
            variant="standard"
            name="content"
            value={formik.values.content}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!((formik.touched.tags && formik.errors.tags))}
            margin="dense"
            id="tags"
            label="Tags"
            type="tags"
            fullWidth
            variant="standard"
            name="tags"
            value={formik.values.tags}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
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
WindowAddNews.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // current: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   username: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   avatar: PropTypes.isRequired,
  // }).isRequired,
};

export default WindowAddNews;

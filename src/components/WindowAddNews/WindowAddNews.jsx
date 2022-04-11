import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Button, TextField, Dialog, DialogActions, DialogContent,
  DialogTitle, CircularProgress, Box, Alert, Input,
} from '@mui/material';

import { requestAddNews } from '../../redux/actions/actionsNews';

function WindowAddNews(props) {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.authUser);
  const {
    open, handleClose,
  } = props;

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    content: Yup.string()
      .min(10, 'Too Short!')
      .max(700, 'Too Long!')
      .required('Required'),
    tags: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    file: Yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tags: '',
      file: null,
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(requestAddNews(values));
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
            type="text"
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
            type="text"
            fullWidth
            variant="standard"
            name="tags"
            value={formik.values.tags}
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
WindowAddNews.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default WindowAddNews;

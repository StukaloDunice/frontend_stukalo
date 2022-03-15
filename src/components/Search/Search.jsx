import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import './style.css';

function Search() {
  return (
    <div className="form-search">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" variant="standard" />
      </Box>
      <Stack direction="row" spacing={1}>
        <Chip label="Title" />
        <Chip color="primary" label="Content" />
        <Chip label="Tags" />
        <Chip label="Author" />
      </Stack>
    </div>
  );
}

export default Search;

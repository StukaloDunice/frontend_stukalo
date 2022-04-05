import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Search() {
  const [textInput, setTextInput] = useState('');
  const { news } = useSelector((state) => state.allNews);
  return (
    <>
      <DialogTitle>Add news</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          name="title"
          value={textInput}
          onChange={(event) => {
            setTextInput(event.target.value);
            console.log(textInput);
          }}
        />
      </DialogContent>
    </>
  );
}

export default Search;

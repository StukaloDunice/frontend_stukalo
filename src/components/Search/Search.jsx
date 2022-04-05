import React, { useMemo, useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import filtrationNews from '../../lib/filtrationNews';

import './style.css';

function Search(props) {
  const {setFilteredNews, news } = props;
  const [textInput, setTextInput] = useState('');
  const [tab, setTab] = useState('all');
  const vsp = useMemo(() => filtrationNews(textInput, tab, news), [textInput, tab]);
  useEffect(() => {
    setFilteredNews(vsp);
  }, [vsp]);

  return (
    <div className='search-news'>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <DialogContent>
          <TextField
            id="Search"
            fullWidth
            label="Search"
            type="text"
            name="Search"
            value={textInput}
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
          />

        </DialogContent>
      </Box>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="All"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
        <FormControlLabel
          value="tags"
          control={<Radio />}
          label="Tags"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
        <FormControlLabel
          value="authors"
          control={<Radio />}
          label="Authors"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
      </RadioGroup>
    </ div>
  );
}

export default Search;

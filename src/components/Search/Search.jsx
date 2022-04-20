import React, {
  useMemo, useState, useEffect, memo,
} from 'react';
import PropTypes from 'prop-types';

import {
  TextField, DialogContent, Radio, RadioGroup, FormControlLabel, Box,
} from '@mui/material';

import filterNews from '../../lib/filterNews';

import styles from './Search.module.css';

function Search(props) {
  const { setFilteredNews, news } = props;

  const [textInput, setTextInput] = useState('');
  const [tab, setTab] = useState('all');

  const filteredNews = useMemo(() => filterNews(textInput, tab, news), [textInput, tab]);

  useEffect(() => {
    setFilteredNews(filteredNews);
  }, [filteredNews]);

  return (
    <div className={styles.search}>
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
    </div>
  );
}

Search.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      image: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    }.isRequired,
  )).isRequired,
  setFilteredNews: PropTypes.func.isRequired,
};

export default memo(Search);

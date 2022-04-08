import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews/CardNews';
import WindowChangeUser from '../../components/WindowChangeUser/WindowChangeUser';
import WindowAddNews from '../../components/WindowAddNews/WindowAddNews';
import returnImage from '../../lib/returnImage';

import './style.css';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(requestUser(id));
  }, [dispatch, id]);
  const {
    loading, error, current, auth,
  } = useSelector((state) => state.authUser);
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) {
    return (
      <Alert severity="error">{error}</Alert>
    );
  }
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (current) {
    return (
      <>
        <div className="user-page__info">
          <Avatar
            alt="Remy Sharp"
            src={returnImage(current.avatar)}
            sx={{ width: 250, height: 250 }}
          />
          <Typography gutterBottom variant="h5">
            {current.username}
          </Typography>
          {current.id === auth.id && (
          <div className="buttons-add-editing">
            <Button
              variant="contained"
              onClick={() => {
                setTarget('add-news');
                handleOpen();
              }}
            >
              Add news
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setTarget('editing-user');
                handleOpen();
              }}
            >
              Editing user
            </Button>
          </div>
          )}
        </div>
        <div className="user-page__news">
          {current.news.map((item) => (
            <CardNews
              key={item.id}
              data={{ ...item, user: { username: current.username, id: current.id } }}
            />
          ))}
        </div>
        {target === 'editing-user' && <WindowChangeUser open={open} handleClose={handleClose} />}
        {target === 'add-news' && <WindowAddNews open={open} handleClose={handleClose} />}
      </>
    );
  }
  return null;
}

export default UserPage;

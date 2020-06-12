import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Music Waveform</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

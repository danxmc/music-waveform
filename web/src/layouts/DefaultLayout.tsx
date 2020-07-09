import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';

function DefaultLayout(props: { children: React.ReactChild }) {
  return (
    <Fragment>
      <NavBar />
      <Container>{props.children}</Container>
    </Fragment>
  );
}

export default DefaultLayout;

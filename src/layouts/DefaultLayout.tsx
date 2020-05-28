import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import NavBar from "../components/NavBar";

function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <Fragment>
      <NavBar />
      <Container>{props.children}</Container>
    </Fragment>
  );
}

export default DefaultLayout;

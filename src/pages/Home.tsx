import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AudioInputForm from "../components/AudioInputForm";
import AudioList from "../components/AudioList";

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant="h4">Waveform Audio Viewer</Typography>
      </Grid>
      <Grid item xs={6}>
        <AudioInputForm />
      </Grid>

      <Grid item xs={12}>
        <AudioList />
      </Grid>
    </Grid>
  );
}

export default Home;
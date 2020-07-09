import React from 'react';
import { Grid, Typography, FormControlLabel, Switch } from '@material-ui/core';
import AudioInputForm from '../components/AudioInputForm';
import AudioList from '../components/AudioList';

function Home() {
  const [usingWebAudioAPI, setUsingWebAudioApi] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsingWebAudioApi(event.target.checked);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Typography variant='h4'>Waveform Audio Viewer</Typography>
      </Grid>
      <Grid item xs={3}>
        <FormControlLabel
          control={
            <Switch
              checked={usingWebAudioAPI}
              onChange={handleChange}
              name='useWebAudioAPI'
              color='primary'
            />
          }
          label='Use Web Audio API'
        />
      </Grid>
      <Grid item xs={12}>
        <AudioInputForm />
      </Grid>

      <Grid item xs={12}>
        <AudioList />
      </Grid>
    </Grid>
  );
}

export default Home;

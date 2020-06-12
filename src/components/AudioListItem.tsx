import React, { useState } from 'react';
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { createWaveformData, getArrayBufferFromFile } from '../utilities';
import WaveformData from 'waveform-data';
import WaveformImg from './WaveformImg';

const useStyles = makeStyles({
  title: {
    fontSize: 16,
  },
});

function AudioListItem(props: { song: File }) {
  const classes = useStyles();

  const [waveformData, setWaveformData] = useState<WaveformData>();

  const handleGetWaveformData = async () => {
    // Convert File to Array Buffer
    const audioArrayBuffer = await getArrayBufferFromFile(props.song);

    // Convert Array Buffer to Waveform Data
    const audioWaveformData = await createWaveformData(audioArrayBuffer);

    // Set state
    setWaveformData(audioWaveformData);
  };

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textPrimary'>
          {props.song.name}
        </Typography>
        {waveformData ? <WaveformImg waveformData={waveformData} /> : null}
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleGetWaveformData}>
          Get Waveform Data
        </Button>
      </CardActions>
    </Card>
  );
}

export default AudioListItem;

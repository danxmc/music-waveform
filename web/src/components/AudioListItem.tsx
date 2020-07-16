import React, { useState, Fragment } from 'react';
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { createWaveformData, getArrayBufferFromFile } from '../utilities';
import { JsonWaveformData } from 'peaks.js';
import PeaksWaveform from './PeaksWaveform';

const useStyles = makeStyles({
  title: {
    fontSize: 16,
  },
});

function AudioListItem(props: { song: File }) {
  const classes = useStyles();

  const [waveformData, setWaveformData] = useState<JsonWaveformData>();

  const handleGetWaveformData = async () => {
    // Convert File to Array Buffer
    const audioArrayBuffer = await getArrayBufferFromFile(props.song);

    // Convert Array Buffer to Waveform Data
    const audioWaveformData = await createWaveformData(audioArrayBuffer);

    console.log(audioWaveformData);

    // Set state
    setWaveformData(audioWaveformData);
  };

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textPrimary'>
          {props.song.name}
        </Typography>
        {waveformData ? (
          <Fragment>
            {/* <WaveformImg waveformData={waveformData} /> */}
            <PeaksWaveform audio={props.song} waveformData={waveformData} />
          </Fragment>
        ) : null}
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

import React, { Fragment } from 'react';
import { useInputAudioState } from '../store/inputAudio/inputAudioContext';
import { arrayFromFileList } from '../utilities';
import { Typography } from '@material-ui/core';
import AudioListItem from './AudioListItem';

function AudioList() {
  // Global State
  const { inputAudioState } = useInputAudioState();

  const audios = arrayFromFileList(inputAudioState.songs);

  return (
    <Fragment>
      <Typography variant='h6'>Audio List</Typography>
      <div>
        {audios.length ? (
          audios.map((song, index) => {
            return (
              <AudioListItem
                key={`audioItem-${index}-${song.name}`}
                song={song}
              />
            );
          })
        ) : (
          <Typography>No audios yet</Typography>
        )}
      </div>
    </Fragment>
  );
}

export default AudioList;

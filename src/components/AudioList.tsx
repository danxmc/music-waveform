import React, { Fragment } from 'react'
import { useInputAudioState } from "../store/inputAudio/inputAudioContext";
import { arrayFromFileList } from '../utilities';
import { Typography } from '@material-ui/core';
import AudioListItem from './AudioListItem';


function AudioList() {
  // Global State
  const { inputAudioState } = useInputAudioState();

  return (
    <Fragment>
      <Typography variant="h6">Audio List</Typography>
      <div>
        {arrayFromFileList(inputAudioState.songs).map((song, index) => {
          return (
            <AudioListItem 
            key={`audioItem-${index}-${song.name}`}  
            song={song}
            />
          )
        })}
      </div>
    </Fragment>
  )
}

export default AudioList

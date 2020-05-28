import React, { Fragment } from "react";
import { Button, makeStyles } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useInputAudioState } from "../store/inputAudio/inputAudioContext";

const useStyles = makeStyles(() => ({
  input: {
    display: "none",
  },
}));

function AudioInputForm() {
  // Global State
  const { dispatchInputAudioState } = useInputAudioState();

  const classes = useStyles();

  const handleInputAudioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatchInputAudioState({
      type: "SET_SONGS",
      payload: event.target.files,
    });
  };

  return (
    <Fragment>
      <input
        accept="audio/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleInputAudioFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload Audio
        </Button>
      </label>
    </Fragment>
  );
}

export default AudioInputForm;

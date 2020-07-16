import React, { Fragment, useEffect } from 'react';
import Peaks, { JsonWaveformData } from 'peaks.js';
import { objectURLFromFile } from '../utilities';

function PeaksWaveform(props: { audio: File; waveformData: JsonWaveformData }) {
  console.log(props);
  useEffect(() => {
    const AudioContext = window.AudioContext;
    const audioContext = new AudioContext();

    const options = {
      containers: {
        overview: document.getElementById(
          `overview-container-waveform-${props.audio.name}`,
        )!,
        zoomview: document.getElementById(
          `zoomview-container-waveform-${props.audio.name}`,
        )!,
      },
      mediaElement: document.getElementById(`peaks-audio-${props.audio.name}`)!,
      waveformData: {
        json: props.waveformData,
      },
    };
    // mediaElement: document.querySelector(
    //   `audio#peaks-audio-$props.audio.name`,
    // )!,

    // Peaks.init(options, function (err, peaks) {
    //   // Do something when the waveform is displayed and ready
    // });
    Peaks.init(
      {
        containers: {
          overview: document.getElementById(
            `overview-container-waveform-${props.audio.name}`,
          )!,
          zoomview: document.getElementById(
            `zoomview-container-waveform-${props.audio.name}`,
          )!,
        },
        mediaElement: document.getElementById(
          `peaks-audio-${props.audio.name}`,
        )!,
        waveformData: {
          json: props.waveformData,
        },
      },
      function (err, peaks) {
        console.error(err);
        console.log(peaks);
        // Do something when the waveform is displayed and ready
        if (err) {
          console.error('Failed to initialize Peaks instance: ' + err.message);
          return;
        }

        console.log(peaks!.player.getCurrentTime());
      },
    );
  }, []);

  return (
    <Fragment>
      <div id={`peaks-container-${props.audio.name}`}>
        <div id={`zoomview-container-waveform-${props.audio.name}`}></div>
        <div id={`overview-container-waveform-${props.audio.name}`}></div>
      </div>
      <audio id={`peaks-audio-${props.audio.name}`}>
        <source src={objectURLFromFile(props.audio)} type={props.audio.type} />
      </audio>
    </Fragment>
  );
}

export default PeaksWaveform;

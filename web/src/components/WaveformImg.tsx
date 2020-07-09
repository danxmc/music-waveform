import React, { useRef, useEffect } from 'react';
import WaveformData from 'waveform-data';

function WaveformImg(props: { waveformData: WaveformData }) {
  const refWaveformCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scaleY = (amplitude: number, height: number) => {
      const range = 256;
      const offset = 128;

      return height - ((amplitude + offset) * height) / range;
    };

    const canvas = refWaveformCanvas.current!;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.beginPath();

      const channel = props.waveformData.channel(0);

      // Loop forwards, drawing the upper half of the waveform
      for (let x = 0; x < props.waveformData.length; x++) {
        const val = channel.max_sample(x);

        ctx?.lineTo(x + 0.5, scaleY(val, canvas.height) + 0.5);
      }

      // Loop backwards, drawing the lower half of the waveform
      for (let x = props.waveformData.length - 1; x >= 0; x--) {
        const val = channel.min_sample(x);

        ctx?.lineTo(x + 0.5, scaleY(val, canvas.height) + 0.5);
      }

      ctx?.closePath();
      ctx?.stroke();
      ctx?.fill();
    }
  }, [props.waveformData]);

  return <canvas ref={refWaveformCanvas}></canvas>;
}

export default WaveformImg;

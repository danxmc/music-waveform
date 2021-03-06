import { JsonWaveformData } from 'peaks.js';
import WaveformData from 'waveform-data';

function arrayFromFileList(list: FileList) {
  return Array.from(list);
}

function objectURLFromFile(file: File) {
  return URL.createObjectURL(file);
}

async function createWaveformData(
  arrayBuffer: ArrayBuffer,
): Promise<JsonWaveformData> {
  let waveformData = new Promise<JsonWaveformData>((resolve) => {
    resolve({} as JsonWaveformData);
  });
  const audioContext = new AudioContext();
  const options = {
    audio_context: audioContext,
    array_buffer: arrayBuffer,
    scale: 512,
  };
  try {
    waveformData = new Promise<JsonWaveformData>((resolve, reject) => {
      WaveformData.createFromAudio(options, (err, waveform) => {
        if (err) {
          reject(err);
        } else {
          resolve((waveform as unknown) as JsonWaveformData);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }

  return waveformData;
}

async function getArrayBufferFromFile(file: File): Promise<ArrayBuffer> {
  let arrayBuffer = new Promise<ArrayBuffer>((resolve) => {
    resolve(new ArrayBuffer(0));
  });
  try {
    arrayBuffer = new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => {
        reject(reader.error);
      };

      reader.onabort = () => {
        console.log('Aborted');
      };
      reader.onloadstart = () => {
        console.log('Load Start');
      };
      reader.onload = () => {
        console.log('Loaded');
      };
      reader.onloadend = () => {
        console.log('Load End', reader.result);
        resolve(reader.result as ArrayBuffer);
      };

      reader.readAsArrayBuffer(file);
    });
  } catch (err) {
    console.log(err);
  }
  return arrayBuffer;
}

export {
  arrayFromFileList,
  objectURLFromFile,
  createWaveformData,
  getArrayBufferFromFile,
};

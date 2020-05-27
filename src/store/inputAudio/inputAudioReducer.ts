import { InputAudioState, InputAudioReducerAction } from "./inputAudio";

export const initialInputAudioState: InputAudioState = {
  songs: {} as FileList,
  waveformData: "",
};

export const inputAudioReducer = (
  state: InputAudioState = initialInputAudioState,
  action: InputAudioReducerAction
): InputAudioState => {
  switch (action.type) {
    case "SET_SONGS":
      return {
        ...state,
        songs: action.payload,
      };
    case "SET_WAVEFORM_DATA":
      return {
        ...state,
        waveformData: action.payload,
      };
    case "RESET_STATE":
      return {
        ...initialInputAudioState,
      };
    default:
      return state;
  }
};

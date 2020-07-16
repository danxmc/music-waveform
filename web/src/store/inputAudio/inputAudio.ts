type Actions = 'SET_SONGS' | 'SET_WAVEFORM_DATA' | 'RESET_STATE';

export interface InputAudioState {
  songs: FileList;
  waveformData: string;
}

export interface InputAudioReducerAction {
  type: Actions;
  payload: any;
}

export type InputAudioStateContextValue = {
  inputAudioState: InputAudioState;
  dispatchInputAudioState: React.Dispatch<InputAudioReducerAction>;
};

export type InputAudioProviderProps = {
  value?: InputAudioStateContextValue;
  children: React.ReactNode;
};

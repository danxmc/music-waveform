import React, { createContext, useReducer, useMemo } from 'react';
import { initialInputAudioState, inputAudioReducer } from './inputAudioReducer';
import {
  InputAudioProviderProps,
  InputAudioStateContextValue,
} from './inputAudio';

export const InputAudioContext = createContext<InputAudioStateContextValue>({
  inputAudioState: initialInputAudioState,
  dispatchInputAudioState: () => {},
});

export const InputAudioProvider = (
  props: InputAudioProviderProps,
): JSX.Element => {
  const [inputAudioState, dispatchInputAudioState] = useReducer(
    inputAudioReducer,
    initialInputAudioState,
  );

  const value = useMemo(() => {
    return {
      inputAudioState,
      dispatchInputAudioState,
    };
  }, [inputAudioState]);

  return (
    <InputAudioContext.Provider value={value}>
      {props.children}
    </InputAudioContext.Provider>
  );
};

export const useInputAudioState = (): InputAudioStateContextValue => {
  const context = React.useContext(InputAudioContext);
  if (!context) {
    throw new Error(
      'usePlaceState must be used within a inputAudioContextProvider',
    );
  }
  return context;
};

import React, { Fragment } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

import { InputAudioProvider } from './store/inputAudio/inputAudioContext';

function App() {
  return (
    <Fragment>
      <InputAudioProvider>
        <BrowserRouter>
          <DefaultLayout>
            <Route path='/' exact key='Home' component={Home} />
          </DefaultLayout>
        </BrowserRouter>
      </InputAudioProvider>
    </Fragment>
  );
}

export default App;

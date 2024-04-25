import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
// import useWeather from './hooks/useWeather';

function App() {
  // const { loading } = useWeather();

  return (
    <div className="App">
      Hello world! <ToastContainer />
    </div>
  );
}

export default App;

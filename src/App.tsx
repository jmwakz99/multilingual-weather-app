import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import { API_URL } from './utils/CONSTANTS'
import { notification } from './utils/notification'

function App() {
  console.log(API_URL)

  useEffect(() => {
    console.log('App useEffect')
    notification('Hello world!', 'error')
    console.log('App useEffect5')
  }, [])
  return (
    <div className="App">
      Hello world! <ToastContainer />
    </div>
  )
}

export default App

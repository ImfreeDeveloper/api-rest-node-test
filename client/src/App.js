import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes'
import TopBar from './components/topBar';

import './styles/main.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App

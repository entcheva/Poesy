import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'
import './index.css'

getPoemAPI => {
  const poem = axios.get('/user?ID=12345') // placeholder URL
  .then( response => response.data) // what should we do with the response?
}

getPhotoAPI => {
  const photo = axios.get('/user?ID=12345') // placeholder URL
  .then( response => const photoResponse = photo) // what should we do with the response?
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

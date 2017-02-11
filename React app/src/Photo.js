import React, { Component } from 'react'
import axios from 'axios'

export default class Photo extends Component {

  constructor() {
    super()
    this.state = {
      photo: null
    }
  }


  function getPhotoAPI() {
    const photoURL = axios.get('/user?ID=12345') // placeholder URL
    .then( response => this.setState({photo: photoURL}) )
  }

  render() {
    return (

      <div>
        <h2>Hello from the Photo component</h2>
        <div> { this.state.photo } </div>
      </div>
    )
  }
}

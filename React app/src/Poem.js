import React, { Component } from 'react'
import axios from 'axios'

export default class Poem extends Component {

  constructor() {
    super()
    this.state = {
      poem: null
    }
  }

  function getPoemAPI() {
    const poemURL = axios.get('/user?ID=12345') // placeholder URL
    .then( response => this.setState({poem: poemURL}) )
  }

  render() {
    return (
      <div>
        <h2>Hello from the Poem component</h2>
        <p> { this.state.poem } </p>
      </div>
    )
  }
}

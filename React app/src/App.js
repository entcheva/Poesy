import React, { Component } from 'react'
import Photo from './Photo'
import Poem from './Poem'

export default class App extends Component {



  render() {
    return (

      <div>
        <h1>TeamFeyonce Postcard Generator</h1>

        < Photo photo={ this.state.photo } />
        < Poem poem={ this.state.poem } />

        <button>Generate Postcard</button>

      </div>
    )
  }
}

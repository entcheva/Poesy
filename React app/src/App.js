import React, { Component } from 'react'
import Photo from './Photo'
import Poem from './Poem'


export default class App extends Component {
  render() {
    return (

      <div>
        <h1>Hi</h1>
        < Photo />
        < Poem />
        <button>Submit</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Photo from './Photo'
import Poem from './Poem'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      photo: null,
      poem: null
    }

    this.onPhotoChange = this.onPhotoChange.bind(this)
    this.onPoemChange = this.onPoemChange.bind(this)
  }

  onPhotoChange(response) {
    this.setState({
     photo: response
    })
  }

  onPoemChange(response) {
    this.setState({
     poem: response.url
    })
  }

  render() {
    return (

      <div>
        <h1>TeamFeyonce Postcard Generator</h1>

        < Photo
        onChange={ this.onPhotoChange }
        photo={ this.state.photo }
        query="sky"/>
        < Poem onChange={ this.onPoemChange } poem={ this.state.poem } />

        <button >Generate Postcard</button>

      </div>
    )
  }
}

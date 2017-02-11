import React, { Component } from 'react'
import axios from 'axios'

export default class Photo extends Component {

  getPhotoAPI() {
    axios.get('/user?ID=12345') // placeholder URL
    .then( response => this.props.onChange(response) )
  }

  render() {
    return (

      <div>
        <h2>Hello from the Photo component</h2>
        <div> { this.props.photo } </div>
      </div>
    )
  }

}

Photo.propTypes = {
  photo: React.PropTypes.string,
  onChange: React.propTypes.func
}

Photo.defaultProps = {
  photo: "https://media.giphy.com/media/EdnHfe5SWGTm/giphy.gif"
}

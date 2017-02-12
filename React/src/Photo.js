import React, { Component } from 'react'
import axios from 'axios'

export default class Photo extends Component {

  componentDidMount() {
    this.getPhotoAPI(this.props.query)
  }

  getPhotoAPI(query) {

    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query.split(' ').join('+')}`)
      .then(response => {
        let gif_url = response.data.data.image_url
        this.props.onChange(gif_url)
      })
    // axios.get('/user?ID=12345') // placeholder URL
    // .then( response => this.props.onChange(response) )
  }

  render() {
    return (

      <div>
        <h2>Hello from the Photo component</h2>
        <img src={this.props.photo} alt='a beautiful sky'/>

      </div>
    )
  }

}

Photo.propTypes = {
  photo: React.PropTypes.string,
  onChange: React.PropTypes.func
}

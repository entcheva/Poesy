import React, { Component } from 'react'
import axios from 'axios'

export default class Poem extends Component {

  getPoemAPI() {
    axios.get('/user?ID=12345') // placeholder URL
    .then( response => this.props.onChange(response) )
  }

  render() {
    return (
      <div>
        <h2>Hello from the Poem component</h2>
        <p> { this.props.poem } </p>
      </div>
    )
  }
}

Poem.propTypes = {
  poem: React.PropTypes.string,
  onChange: React.PropTypes.func
}

Poem.defaultProps = {
  poem: "yooooo"
}

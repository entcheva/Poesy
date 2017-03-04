import React, { Component } from 'react'
import axios from 'axios'

export default class Poem extends Component {

  componentDidMount() {
    this.getPoemAPI()
  }

  getPoemAPI(category) {
    axios.get(`#`)
    .then( response => {
      this.props.onChange(response)
    })
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

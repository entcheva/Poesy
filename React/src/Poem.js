import React, { Component } from 'react'
import axios from 'axios'

export default class Poem extends Component {

  componentDidMount() {
    this.getPoemAPI()
  }

  getPoemAPI(category) {
    axios.get(`http://quotes.rest/qod.json?category=${category}`)
    .then( response => {

      var poemURL = response.data.contents.quotes[0].quote
      this.props.onChange(poemURL)
      // json.contents.quotes[0].quote

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

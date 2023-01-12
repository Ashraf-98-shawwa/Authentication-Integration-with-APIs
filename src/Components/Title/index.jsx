import React, { Component } from 'react'
import "./style.css"

export default class Title extends Component {
  render() {
    return (
      <h2 className='Title'>{this.props.name}</h2>
    )
  }
}

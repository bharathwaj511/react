import React, { Component } from 'react'

export default class Propsclassstate extends Component {
    state={name:"SKCET",
place:"CBE"
}
  render() {
    return (
      <div>
        <h1>I am studying at {this.state.name} in {this.state.place}</h1>
        </div>
    )
  }
}

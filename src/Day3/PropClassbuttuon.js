import React, { Component } from 'react'

export default class PropClassbuttuon extends Component {
    state={
        name:"SKCET",place:"CBE"
    }
  render() {
    return (
      <div>
            <h1>I am pursuing at {this.state.name} place {this.state.place}</h1>
            <button onClick={()=>{this.setState({name:"Atria"})}}>Click me</button>
      </div>
    )
  }
}

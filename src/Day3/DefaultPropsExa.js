import React from 'react'

export default function DefaultPropsExa(props) {
  return (
    <div>
        <h1>My name is {props.name},I'm friend of Doremon and my college is {props.college}</h1>
    </div>
  )
}
DefaultPropsExa.defaultProps={college:"SKCET"}

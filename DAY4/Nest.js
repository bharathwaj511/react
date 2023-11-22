import React from 'react'

export default function Nest() {
    const fruits=["Mango","Apple","Banana"];
    const display=fruits.map((name)=>{return<li>{name} </li>})
  return (

    <div><ul>
        {display}</ul></div>
  )
} 
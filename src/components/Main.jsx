import React from 'react'
import Hero from './Hero'

const Main = (props) => {
  return (
    <div>
        <h2>Main</h2>
        <Hero b={props.a}/>
    </div>
  )
}

export default Main
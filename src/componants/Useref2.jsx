import React, { useRef } from 'react'
import UseReaf from './UseReaf'
import { useState } from 'react'

const Useref2 = () => {


    let myref=useRef(0);
    console.log(myref);


    const handleonclick=()=>{

myref.current++;
console.log("number of times button click", myref.current);
    }

    console.log("Componanat is rerender");

  return (
    <div>

<button onClick={handleonclick}>click</button>

    </div>
  )
}

export default Useref2
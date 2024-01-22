import { useState } from "react";
import React from 'react'

const Useref3 = () => {

    const [num, setnum] = useState(0);

    const handleclick=()=>{
setnum(num+1);
console.log(num);
    }

console.log("componanat is rendered");
  return (

    <div>
<button onClick={handleclick}>Click</button>

    </div>
  )
}

export default Useref3
import React from 'react'
import { useRef } from 'react'

const UseReaf = () => {

    let myref=useRef();
    let firstref=useRef();
    let lastref=useRef();

    const handleclick=()=>{
myref.current.style.color="red";
console.log(myref);
    }


    const handlesubmit=(e)=>{

e.preventDefault();
console.log("my full name is", firstref.current.value, lastref.current.value);

    }

  return (
    <div>
<h2 ref={myref}>My name is nilesh</h2>
<button onClick={handleclick}>Click</button>
        




<form onSubmit={handlesubmit}>


<input type='text' ref={firstref} placeholder='Enter first Name' /><br/>
<input type='text' ref={lastref} placeholder='Enter last Name' />
<button type='submit'>Submit</button>



</form>

    </div>
  )
}

export default UseReaf
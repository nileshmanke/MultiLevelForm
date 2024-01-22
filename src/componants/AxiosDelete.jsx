import React from 'react'
import axios from "axios";


const AxiosDelete = () => {


const format=()=>{
    axios.delete("https://jsonplaceholder.typicode.com/users/6")
    .then((response)=>{
console.log(response);
    })
.catch((error)=>{

    console.log(error);

})
}
      
  return (
    <div>

<button onClick={format}>Delete</button>

    </div>
  )
}

export default AxiosDelete

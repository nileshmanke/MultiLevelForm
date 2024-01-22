import axios from "axios";
import { useEffect,useState } from "react";
import React from 'react'

const Axiosput = () => {

  const [userData, setUserData] = useState({fname:"",lname:""});


 

const handlechange=(e)=>{

setUserData({...userData,[e.target.name]:e.target.value});



}

const handlesubmit=(e)=>{
  e.preventDefault();
  axios.put("https://jsonplaceholder.typicode.com/users/6",userData)
  .then((response)=>{
    console.log(response);

  }).catch((error)=>{
    console.log(error);

  })


}


  return (
    


    <>

<form onSubmit={handlesubmit}>
<input type="text" name="fname" id="" value={userData.fname} onChange={handlechange} placeholder="first name"/>
<input type="text" name="lname" id="" value={userData.lname} onChange={handlechange} placeholder="last name"/>
<button>Put data</button>
</form>


    </>
  )
}

export default Axiosput
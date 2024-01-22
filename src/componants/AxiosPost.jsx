import axios from "axios";
import { useEffect,useState } from "react";
import React from 'react'

const AxiosPost = () => {

  const [userData, setUserData] = useState({fname:"",lname:""});


  // useEffect(() => {
  //   axios
  //   .post("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //   console.log(response);
  //   setUserData(response.data);
  //   })
  //   .catch((error) => console.log(error));
  //   }, []);

const handlechange=(e)=>{

setUserData({...userData,[e.target.name]:e.target.value});



}

const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/users",userData)
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
<button>Post data</button>
</form>


    </>
  )
}

export default AxiosPost
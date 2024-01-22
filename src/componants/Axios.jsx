import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Axios() {


  const [userData, setUserData] = useState([]);


  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    console.log(response);
    setUserData(response.data);
    })
    .catch((error) => console.log(error));
    }, []);

  
  return (
  <>


<div>
{userData.map((item, i) => (
<div style={{ backgroundColor: "#eee" }} key={i}>
<h4> Name : {item.name}</h4>
<p>City: {item.address.city}</p>
</div>
))}
</div>
  </>
  );
}

export default Axios;

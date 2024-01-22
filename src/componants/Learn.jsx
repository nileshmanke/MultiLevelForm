import React from 'react'
import { useState } from 'react';
const stylecss={


}


const Learn = () => {
    const [num, setnum] = useState(20);

    

    let greeting="";
    const currentTime=new Date().getHours();

    if(currentTime >=1 && currentTime <10){
        greeting="Good morning";
        stylecss.color='Yellow';

    }
    else if(currentTime >=10 && currentTime <15){
        greeting="Good afternoon";
        stylecss.color='Green';
    }
    else{
        greeting="Good night";
        stylecss.color='red';
    }
  return (

    <div>


<h1> Hello <span style={stylecss}>{greeting}</span></h1>

<h1>{num}</h1>

    </div>
  )
}

export default Learn

import React, { Fragment } from 'react'
import Card from './Card';
import mangesh from './Home.module.css'
import Learn from './Learn';
import  * as nilesh from './Child.jsx';
import Map from './Map.jsx';
import Counting from './Counting.jsx';
import Form from './Form.jsx';
import UseEffectdemo from './UseEffectdemo.jsx';
import UseReaf from './UseReaf.jsx';
import Axios from './Axios.jsx';
import AxiosPost from './AxiosPost.jsx';
import Axiosput from './AxiosPut.jsx';
import AxiosDelete from './AxiosDelete.jsx';
import Useref2 from './Useref2.jsx';
import Useref3 from './Useref3.jsx';
import DivSwitcher from './DivSwitcher.jsx';
import MainForm from './MainForm.jsx';

const name="nilesh";
const lname="manke"
const imgurl="https://picsum.photos/id/237/200/300";
const imgurl2="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg"

const Home = () => {

  

  const mystyle={
    backgroundColor:"lightsteelblue",
    fontSize:"80px", 
    textShadow:"5px 5px "

  }
  

  setInterval(() => {
    const date=new Date().toLocaleString();
    document.getElementById('box').innerHTML=date;
    
  }, 1000);
  
  return (
    <React.Fragment>
<MainForm/>
      <DivSwitcher/>

{/* Axios Practical */}

{/* <AxiosDelete/> */}
      {/* <Axiosput/> */}
      {/* <AxiosPost/> */}
      {/* <Axios/> */}




  {/* <UseReaf/> */}
  {/* <Useref2/> */}
  {/* <Useref3/> */}
      {/* <UseEffectdemo/> */}



    
      <h1 id='tbox' className='text-7xl font-bold float-right'></h1>
      {setInterval(() => {
        let today= new Date().toLocaleString();
        document.getElementById('tbox').innerHTML=today;
      }, 1000)}

      <Form/>
<Map/>
<Counting/>
<h1 id='tbox'></h1>
      <p>{nilesh.firstname}</p>
      <p>{nilesh.lastname}</p>
      <nilesh.default/>

        <h1  className='color text-4xl'>Home Componant</h1>
        <h2 style={{backgroundColor:"lightsteelblue",fontSize:"80px", textShadow:"5px 5px " }}>good morning</h2>
        <p className='bg-yellow-300 text-6xl underline font-serif text-orange-950'>Nilesh Ravindra Manke</p>
        <h1>My name is {name+" "+lname}</h1>
        <h1>{`My name is ${name} ${lname}`}</h1>
        <h1 className='color'>{3*3}</h1>
        <h1 style={mystyle}>Its Internal css example</h1>

        <h1 className={mangesh.nilesh}>This is home Componant</h1>
       <a href='https://www.flipkart.com/' target='_blank' >
        <img src={imgurl} alt=''/>

        </a> 

        <a href="https://www.instagram.com/?hl=en"  target='_blank'><img style={{width:'500px', height:'400px',border:'5px solid black',margin:' 10px auto'}} src={imgurl2} alt=''/></a>

<h1 id='box' className='text-4xl mt-2 mb-3' ></h1>


        


        

<Learn/>
       <Card/>
        </React.Fragment>
   
  )
}

export default Home
import React,{useState} from 'react'

const Form = () => {
    const [fname, setfname] = useState();

    const [formData, setformData] = useState({fname:"",lname:"", email:"", phone:"",})

    const handlechange=(e)=>{
      console.log(e);
      setformData({...formData,[e.target.name]:e.target.value});

    }
    const onsubmits=(e)=>{
e.preventDefault();
console.log(formData);
    }
  return (
    <div className='m-48'>


<h1 title='This is heading'>My name is <span className='text-5xl font-bold'>{fname}</span></h1>
<input  className='bg-zinc-200 hover:bg-black text-white rounded placeholder:p-6' placeholder='Enter your name'  onChange={(e)=>{
setfname(e.target.value);
}}/>

<h1 className='text-4xl font-bold m-6'>This is Form Componant</h1>

<form onSubmit={onsubmits}>
<input  className='bg-zinc-600 text-white'  type="text" name="fname" id=""  placeholder='Enter first name'  onChange={handlechange}/>

<br/>
<br/>
<input  className='bg-zinc-600   text-white' type="text" name="lname" id=""  placeholder='Enter last name'  onChange={handlechange}/>
<br/>
<br/>
<br/>
<input  className='bg-zinc-600  text-white' type="text" name="email" id=""  placeholder='Enter Email'  onChange={handlechange}/>
<br/>
<br/>
<br/>
<input  className='bg-zinc-600  text-white' type="text" name="phone" id=""  placeholder='Enter Phone'  onChange={handlechange}/>
<br/>
<br/>
<br/>
<button type='submit' className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900' >Submit Data</button>

</form>

    </div>
  )
}

export default Form
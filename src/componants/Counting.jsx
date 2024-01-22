import React,{useState} from 'react'

const Counting = () => {
    const [count, setcount] = useState(0)
    const [div, setdiv] = useState(0)
    {setInterval(() => {
        setdiv(div+1);
    }, 1000)}

    const[no,setno]=useState(20);
    const [pets, setpets] = useState({dogs:0,cats:0});
  return (
    <div>
        {/* <h1>Count is  <span className='text-5xl font-bold' >{div}</span></h1> */}




        <h1>Count is  <span className='text-5xl font-bold ' > {count}</span></h1>

        <button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900' onClick={()=>{
            setcount(count+1);
        }}>IncreaseCount</button>
        <h1>Count is  <span className='text-5xl font-bold ' > {no}</span></h1>

<button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900' onClick={()=>{
    setno(no-1);
}}>DecreaseCount</button>

<p className='text-5xl'>Numbers of Dogs are {pets.dogs}</p>

{/* pets */}


<button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900 m-11' onClick={()=>{
    setpets({...pets,dogs:pets.dogs+1});
}}>IncreaseDogs</button>

<p className='text-5xl'>Numbers of Cats are {pets.cats}</p>

<button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900 m-11' onClick={()=>{
    setpets({...pets,cats:pets.cats+1});
}}>IncreaseCats</button>

<div>
<button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900' onClick={()=>{
    setpets({...pets,cats:pets.cats-1});
}}>DecreaseCats</button>


<button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900 m-24' onClick={()=>{
    setpets({...pets,dogs:pets.dogs-1});
}}>DecreaseDogs</button>

</div>





    </div>
  )
}

export default Counting
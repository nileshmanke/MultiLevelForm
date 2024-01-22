import React, { useEffect,useState } from 'react'

const UseEffectdemo = () => {

     const [num, setnum] = useState(0);
     const [nums, setnums] = useState(0);

     useEffect(()=>{
        alert("UseEffect Invovked");
     },[nums]);

    
  return (
    <div>

        <button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900 m-10' onClick={()=>setnum(num+1)} >Click me:{num}</button>
        <button className='bg-blue-500 py-2 px-2 rounded text-white font-bold  hover:bg-slate-700 active:bg-blue-900' onClick={()=>setnums(nums+1)}>Click me:{nums}</button>
    </div>
  )
}

export default UseEffectdemo
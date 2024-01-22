import React from 'react'

const Mapcomponant = (props) => {
  return (
    <div className='mb-10'>

      <h1 className='max-w-32 bg-orange-400'>name is {props.name}</h1> 
      <h1  className='max-w-32 bg-yellow-300'>post is {props.post}</h1> 
      <h1  className='max-w-32 bg-green-300'>age is {props.age}</h1> 

    </div>
  )
}

export default Mapcomponant
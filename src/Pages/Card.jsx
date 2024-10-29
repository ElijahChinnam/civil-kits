import React from 'react'

export default function Card(props) {


  return (
    <div className='w-auto border border-black rounded-md inline-block p-5 m-2 relative h-80 shadow-lg'>
        <div className='flex justify-center'>
          <img src={props.img} alt="" width={"200rem"} className='shadow-sm'/>
        </div>
        <h1 className='text-xl mt-1 absolute bottom-[4.5rem]'>{props.name}</h1>
        <p className=' absolute bottom-12'>Rs: {props.price}</p>
        <button className='bg-green-700 rounded px-3 py-1 active:scale-95 absolute bottom-2 text-white shadow-md'>Order Now</button>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  let navigate = useNavigate();
  function handleSubmit(){
    navigate("/home");
  }

  return (
    <div className='flex justify-center items-center h-[93vh] shadow-lg'>
        <div>
            <div className='w-auto h-auto border border-black p-5 rounded-md'>
                <h1 className='font-bold text-2xl'>Sign In</h1>
                <br />
                <label htmlFor="username" className='font-semibold text-xl'>Username</label>
                <br />
                <input type="text" className='inline-block border border-black p-2 text-lg rounded-md mb-5'/>
                <br />
                <label htmlFor="password" className='font-semibold text-xl'>Password</label>
                <br />
                <input type="password" name="" id="" className='border border-black p-2 text-lg rounded-md mb-5'/>
                <br />
                <button className='px-4 py-1 bg-green-700 rounded-md text-white mt-1 active:scale-95' onClick={handleSubmit}>Sign In</button>
            </div>
        </div>
    </div>
  )
}

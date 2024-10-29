import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    let navigate = useNavigate();
    function handleSubmit(name){
        navigate(`/${name}`);
    }


  return (
    <div>
        <div className='flex justify-around border border-b-2 items-center'>
            <div className='inline-block hover:cursor-pointer' onClick={()=>{handleSubmit('home')}}>
                <h1 className='text-3xl font-semibold inline-block'>Build<span className='text-green-700 font-semibold'>Smart</span></h1>
            </div>
            <div className='hidden sm:inline-block '>
                <ul className='flex gap-16'>
                    <li className='inline-block hover:cursor-pointer' onClick={()=>{handleSubmit('ordernow')}}>Order Now</li>
                    <li className='inline-block hover:cursor-pointer' onClick={()=>{handleSubmit('build')}}>Build & Learn</li>
                    <li className='inline-block hover:cursor-pointer' onClick={()=>{handleSubmit('documentation')}}>Documentation</li>
                    <li className='inline-block hover:cursor-pointer' onClick={()=>{handleSubmit('aboutus')}}>about us</li>
                </ul>
            </div>
            <div className='hidden md:flex'>
                <button className='border bg-green-700 rounded-md px-3 py-1 mx-2 my-2 active:scale-95 text-white' onClick={()=>{handleSubmit('signup')}}>SignUp</button>
                <button className='border bg-green-700 rounded-md px-3 py-1 mx-2 my-2 active:scale-95 text-white' onClick={()=>{handleSubmit('register')}}>Register</button>
            </div>
        </div>
    </div>
  )
}

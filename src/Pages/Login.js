import React from 'react'
import SignUp from './SignUp'

const Login = () => {
  return (
    <div className='absolute p-12  w-6/12 my-18 mx-auto right-0 left-0 bg-white  text-base border-solid border-2 z-10'>
        <div className='text-5xl font-semibold'>Welcome back!</div>
        <div className='my-4'>Please Enter Login details below</div>
        <div className='text-sm'>Mobile Number:</div>
        <input className='border-solid border-2 border-black rounded-md w-44 h-9'  type='text'></input>
        <div><button className='my-2 w-36 bg-[#dc2626] text-white h-9'>Login</button></div>
        <div><button className='text-blue-600' onClick={SignUp}>New User? create an account</button></div>
    </div>
  )
}

export default Login
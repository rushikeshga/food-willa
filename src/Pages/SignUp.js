import React from 'react'

const SignUp = () => {
  return (
    <div className='absolute p-12  w-6/12 my-18 mx-auto right-0 left-0 bg-opacity-60  text-base border-solid border-2'>
        <div className='text-5xl font-semibold'>Sign Up</div>
        <div className='my-4'>Please Enter below details Sign Up</div>
        <div className='text-sm'>Mobile Number:</div>
        <input className='border-solid border-2 border-black rounded-md w-44 h-9' type='text'></input>
        <div className='text-sm'>Name:</div>
        <input className='border-solid border-2 border-black rounded-md w-44 h-9' type='text'></input>
        <div className='text-sm'>Email:</div>
        <input className='border-solid border-2 border-black rounded-md w-44 h-9' type='text'></input>
        <div><button className='my-2 w-36 bg-[#dc2626] text-white h-9'>Login</button></div>
        <div><button className='text-blue-600'>Already a User? Click here to Login</button></div>
    </div>
  )
}

export default SignUp
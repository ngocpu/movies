import React, { useState } from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../components/context/AuthContext'
export default function SignUp() {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const {user, SignUp} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await SignUp(email,password)
      navigate('/')
    } catch (error){
      console.log(error);
    }
  }
  return (
    <div>
      <div className="w-full h-screen">
        <img className='w-full h-full object-cover hidden sm:block absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/e2a8204b-4c6a-436e-80b8-4e81e3fcc065/VN-vi-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50 ">
            <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white rounded-3xl ">
              <div className="mx-auto max-w-[320px] py-16">
                  <h1 className='text-3xl font-bold'>Sign Up</h1>
                  <form action="" className='flex flex-col w-full py-4' onSubmit={handleSubmit}>
                    <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded-lg ' type="text" placeholder='enter your email...'  autoComplete='email'/>
                    <input onChange={e =>{ setPassword(e.target.value)}} className='p-3 my-2 bg-gray-700 rounded-lg ' type="password" placeholder='enter your password...'  autoComplete='current-password'/>
                    <button onClick={handleSubmit} className='bg-red-600 py-3 px-5 rounded-lg  font-bold my-6'>Sign Up</button>
                  </form>
                  <div className="flex justify-between items-center">
                    <p><input type="checkbox" className='mr-2' /> Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='my-5 py-4'><span className=' text-gray-400'>You already have an account ? </span> <Link to='/login' className=' hover:text-red-500 '>Login Here</Link></p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

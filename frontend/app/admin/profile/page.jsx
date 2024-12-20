import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';

function page() {
  return (
    <div className='w-full h-screen  '>
      <nav className='w-full fixed   items-center text-xl md:text-2xl h-12 flex justify-between px-5'>
        <i> <IoHomeOutline /> </i>
        <i> <CiSettings/> </i>
      </nav>
      {/* Admin Details */}
      <div className='w-full h-80  items-center px-5 md:flex-col md:mt-5 md: gap-5 flex' id="profile">
        <img className='w-40 h-40 rounded-full object-cover object-right-top bg-fuchsia-200' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className='flex flex-col ga-5 items-center'>
          <h1 className='text-xl font-mono font-bold mb-2'>Username</h1>
          <div className='flex gap-5 text-blue-500 font-semibold'>
          <h3>Followers </h3>
          <h3>Following</h3>
          </div>
        </div>
      </div>
      {/* Admin Post's */}
        <div className="w-full px-5 md:px-28 py-5 md:py-10 ">
          <h1 className='font-bold font-mono text-center text-xl'>My Twitte</h1>
          <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
            <h1 className='font-bold'>The smasung</h1>
              <p className='text-sm'>The Samsung is a reliable brand . lot of people like samsung products also i am one of them</p>
              <div className='flex items-center mt-2 justify-between' id="icon">
                <i className='hover:text-blue-600'>
      
                <AiTwotoneLike />
                </i>
                <i className='hover:text-blue-600'>
      
                <AiTwotoneDislike />
                </i>
                <i className='hover:text-blue-600'>
      
                <FaRegCommentAlt />
                </i>
                <img className='w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div>
            <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
            <h1 className='font-bold'>The smasung</h1>
              <p className='text-sm'>The Samsung is a reliable brand . lot of people like samsung products also i am one of them</p>
              <div className='flex items-center mt-2 justify-between' id="icon">
                <i className='hover:text-blue-600'>
      
                <AiTwotoneLike />
                </i>
                <i className='hover:text-blue-600'>
      
                <AiTwotoneDislike />
                </i>
                <i className='hover:text-blue-600'>
      
                <FaRegCommentAlt />
                </i>
                <img className='w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div><div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
            <h1 className='font-bold'>The smasung</h1>
              <p className='text-sm'>The Samsung is a reliable brand . lot of people like samsung products also i am one of them</p>
              <div className='flex items-center mt-2 justify-between' id="icon">
                <i className='hover:text-blue-600'>
      
                <AiTwotoneLike />
                </i>
                <i className='hover:text-blue-600'>
      
                <AiTwotoneDislike />
                </i>
                <i className='hover:text-blue-600'>
      
                <FaRegCommentAlt />
                </i>
                <img className='w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div><div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
            <h1 className='font-bold'>The smasung</h1>
              <p className='text-sm'>The Samsung is a reliable brand . lot of people like samsung products also i am one of them</p>
              <div className='flex items-center mt-2 justify-between' id="icon">
                <i className='hover:text-blue-600'>
      
                <AiTwotoneLike />
                </i>
                <i className='hover:text-blue-600'>
      
                <AiTwotoneDislike />
                </i>
                <i className='hover:text-blue-600'>
      
                <FaRegCommentAlt />
                </i>
                <img className='w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div><div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
            <h1 className='font-bold'>The smasung</h1>
              <p className='text-sm'>The Samsung is a reliable brand . lot of people like samsung products also i am one of them</p>
              <div className='flex items-center mt-2 justify-between' id="icon">
                <i className='hover:text-blue-600'>
      
                <AiTwotoneLike />
                </i>
                <i className='hover:text-blue-600'>
      
                <AiTwotoneDislike />
                </i>
                <i className='hover:text-blue-600'>
      
                <FaRegCommentAlt />
                </i>
                <img className='w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default page
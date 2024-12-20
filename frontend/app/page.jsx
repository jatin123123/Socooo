import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import React from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function Home() {
  return (
    <div className='w-full   overflow-hidden text-zinc-800 h-screen'>
      {/* Nav_Bar */}
      <nav className='w-full px-3 flex items-center border justify-between h-12 border-b'>
        <h1>Socooo <span className='animate-pulse  text-2xl text-green-600'>.</span></h1>
        <HoverCard>
  <HoverCardTrigger asChild>
    <Link href={'/admin/profile'}>
      <img
        className="w-8 h-8 object-right-top object-cover cursor-pointer bg-green-500 rounded-full"
        src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8fDA%3D"
        alt="Profile"
      />
    </Link>
  </HoverCardTrigger>
  <HoverCardContent>
<h1 className='font-mono text-center'>User@</h1>
<div className='flex gap-5 mt-2'>
  <h1>Followers <span>199</span></h1>
  <h1>Following <span>80</span></h1>
</div>
</HoverCardContent>
</HoverCard>

      </nav>
      <div className='w-full h-[95%] flex flex-col sm:flex-row  ' id="app">
        {/* Create-twitte for-mobile */}
        <div className='w-full flex flex-col  text-center   h-[22%] border-b sm:hidden ' id="Create-twite">
          <h1 className='fixed right-[40%] translate-y-1 '>Create Twitte</h1>
      <div id="box" className=' items-center  font-mono gap-2 flex m-auto h-full px-5 py-5 '>
        <div className=' w-28 font-mono text-sm tracking-tighter  whitespace-nowrap '>
          <h1>Tittle.</h1>
          <input className='w-24 text-center border rounded-md' type="text" placeholder='xyz..' />
        </div>
        <div className=' w-28 font-mono text-sm tracking-tighter whitespace-nowrap '>
          <h1>Description.</h1>
          <input className='w-24 border  text-center rounded-md' type="text" placeholder='xyz..' />
        </div>
        <Button>Twitte</Button>
      </div>
        </div>
        {/* create-twitte for largeScreen */}
        <div className='w-[25%]  h-full border-r hidden sm:flex items-center justify-center ' id="Create-twite">
          <div id="container" className='w-[90%] shadow-md  flex flex-col  rounded-xl px-5 py-12 border '>

      <h1 className='text-center font-mono mb-5'>Create-Twitte</h1>
      <div className='mt-5'>
        <h1 className='ml-1'>Tittle</h1>
      <Input placeholder="xyz.." />
      </div>
      <div className='mt-5'>
        <h1 className='ml-1'>Description</h1>
      <Textarea placeholder="xyz.." />
      </div>
        
        <Button className="mt-6 ">Twitte</Button>
          </div>
        </div>
        {/* feed-card */}
        <div className='w-full h-screen  sm:w-[50%] ' id="feed">
          <h1 className='uppercase mt-5   font-semibold font-mono text-center'>treanding</h1>
          <ScrollArea className='w-full  h-screen'>
      {/* post starts */}
          <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
    
          <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </div>  <div className='w-[80%] px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
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
          </ScrollArea>
        </div>
      {/* profile-card */}
      <div className='hidden sm:block w-[25%] h-screen border-l' id="profile">
    <div id="yourpost">
      <h1 className='text-center font-mono font-semibold mt-6'>My Twittes</h1>
      <ScrollArea id="container" className='w-[90%] h-96  m-auto mt-6 px-6 py-5 rounded-xl border'>
    {/* post's Start */}
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
      </div>  <div className='w-full shadow-md rounded-lg border mt-5 py-3 px-2' id="post">
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
    
      </ScrollArea>
    </div>
      </div>
    
      </div>
    </div>
  )
}

export default Home;
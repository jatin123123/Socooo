'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useToast } from "@/hooks/use-toast"


import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import axios from 'axios';

function Home() {
  const baseurl="https://socooo.onrender.com";
 const { toast } = useToast();
  // Create twite 
  const [tittle,setTittle]=useState("");
  const [description,setdiscription]=useState("");
  const CreatePost=async (e)=>{
    e.preventDefault();
    try {
      const response=await axios.post(`${baseurl}/api/create`,{tittle,description},{withCredentials:true});
      if(response.status==200){
        toast({
          title: "Twite Successfully Posted"
        })
      }else{
        alert(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  // MY post

  const [postdata, setPostdata] = useState([]);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/mypost`, {
        withCredentials: true,
      });
      setPostdata(response.data.posts); // Assuming response has a 'posts' array
      // console.log("Posts fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
        router.push("/auth/login");
      } else {
        setError("An error occurred while fetching posts.");
      }
    }
  };

  // Feed.

  const [feedData,setfeedData]=useState([]);
  const feed=async()=>{
    try {
      const responce=await axios.get(`${baseurl}/api/feed`);
      setfeedData(responce.data.feed);
      // console.log();
    } catch (error) {
      alert("Somthing went wrong in feed api")
    }
  }
  // Delete Post Route.
  const deletePost=async(postId)=>{
      try {
        const response=await axios.delete(`${baseurl}/api/deletepost${postId} `,{withCredentials:true}); 
      setPostdata((prevPosts) => prevPosts.filter((post) => post._id !== postId));

        alert("Post Delete Successfully");
      } catch (error) {
        console.log(error)
      }
  }
// Admin Profile
  // ProfileData
  const [profiledata,setprofile]=useState({});
  const profile=async()=>{
    try {
      const response=await axios.get(`${baseurl}/api/adminProfile`,{withCredentials:true});
      setprofile(response.data.admin);
      // console.log(response.data.admin);
    } catch (error) {
      alert("Somthing Went Wrong");
    }
  }



  // UseEffects

  useEffect(() => {
    profile();
    fetchPosts();
    feed();
  }, []);



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
        src={profiledata.UserImage}
        alt="Profile"
      />
    </Link>
  </HoverCardTrigger>
  <HoverCardContent>
<h1 className='font-mono text-center'>{profiledata.username}</h1>
<div className='flex gap-5  justify-center mt-2'>
{profiledata.email}
</div>
</HoverCardContent>
</HoverCard>

      </nav>
      <div className='w-full h-[95%] flex flex-col sm:flex-row  ' id="app">
        {/* Create-twitte for-mobile */}
        <div className='w-full flex flex-col  text-center   h-[22%] border-b sm:hidden ' id="Create-twite">
          <h1 className='fixed right-[40%] translate-y-1 '>Create Twitte</h1>
        <form onClick={CreatePost}>
      <div id="box" className=' items-center  font-mono gap-2 flex m-auto h-full px-5 py-5 '>
        <div className=' w-28 font-mono text-sm tracking-tighter  whitespace-nowrap '>
          <h1>Tittle.</h1>
          <input className='w-24 text-center border rounded-md' value={tittle} onChange={(e)=>setTittle(e.target.value)} type="text" placeholder='xyz..' />
        </div>
        <div className=' w-28 font-mono text-sm tracking-tighter whitespace-nowrap '>
          <h1>Description.</h1>
          <input className='w-24 border  text-center rounded-md' type="text" value={description} onChange={(e)=>setdiscription(e.target.value)} placeholder='xyz..' />
        </div>
        <Button >Twitte</Button>
      </div>
        </form>
        </div>
        {/* create-twitte for largeScreen */}
        <div className='w-[25%]  h-full border-r hidden sm:flex items-center justify-center ' id="Create-twite">
          <div id="container" className='w-[90%] shadow-md  flex flex-col  rounded-xl px-5 py-12 border '>

      <h1 className='text-center  font-mono mb-5'>Create-Twitte</h1>
      <form onSubmit={CreatePost} >
          <div className='mt-5'>
            <h1 className='ml-1'>Tittle</h1>
          <Input className="shadow-md" value={tittle} onChange={(e)=>setTittle(e.target.value)} placeholder="xyz.." />
          </div>
          <div className='mt-5'>
            <h1 className='ml-1'>Description</h1>
          <Textarea className="shadow-md" value={description} onChange={(e)=>setdiscription(e.target.value)} placeholder="xyz.." />
          </div>
            
            <Button className="mt-6 w-full shadow-lg">Twitte</Button>
      </form>
          </div>
        </div>
        {/* feed-card */}
        <div className='w-full h-screen  sm:w-[50%] ' id="feed">
          <h1 className='uppercase mt-5   font-semibold font-mono text-center'>treanding</h1>
          <ScrollArea className='w-full  h-screen'>
      {/* post starts */}
        {feedData.map((feed,index)=>(
            <div key={index} className='w-[80%] flex items-center justify-between px-5 py-3 shadow-md rounded-lg border  m-auto mt-5' id="feed-book">
            <div>
            <h1 className='font-bold'>{feed.tittle}</h1>
            <p className='text-sm'>{feed.description}</p>
            </div>
            <HoverCard>
            <HoverCardTrigger asChild>
              <img className='min-w-5 max-w-5 h-5  object-right-top object-cover bg-green-500 rounded-full' src={feed.author.UserImage} alt="" />         
              </HoverCardTrigger> 
                <HoverCardContent className="w-fit h-fit shadow-2xl animate-pulse">
              <h1 className='font-mono text-center'>{feed.author.username}</h1>
              </HoverCardContent>
              </HoverCard>
              </div>
        ))}           
          </ScrollArea>
        </div>
      {/* profile-card */}
      <div className='hidden  sm:flex justify-between flex-col w-[25%] h-screen border-l' id="profile">
    <div id="yourpost">
      <h1 className='text-center font-mono font-semibold mt-6'>My Twittes</h1>
      <ScrollArea id="container" className='w-[90%] h-96  m-auto mt-6 px-6 py-5 rounded-xl border'>
    {/* post's Start */}
    {error && (
        <div className="text-red-500 mt-4">{error}</div>
      )}
       <div className="w-full max-w-2xl mt-6">
        {postdata.length > 0 ? (
          postdata.map((post, index) => (
            <div
              key={index}
              className="shadow-md flex items-center justify-between rounded-lg border mt-5 py-3 px-2"
            >
              < div className='pr-3'>
              <h2 className="font-bold">{post.tittle || "Untitled Post"}</h2>
              <p className="text-sm">{post.description || "No content available"}</p>
              </div>
              
               <button onClick={()=>deletePost(post._id)} className="min-w-7 text-center text-sm flex justify-center items-center text-white h-7 bg-red-700 hover:bg-red-500 rounded-full "><AiOutlineDelete/></button>
              
            </div>
          ))
        ) : (
          <div className="text-gray-500 mt-4">No posts to display.</div>
        )}
      </div>
      </ScrollArea>
    </div>
    <div className='w-full flex items-center justify-center font-mono opacity-50 h-32 ' id="bottom">
    @JatinJangid
    </div>
      </div>
    
      </div>
    </div>
  )
}

export default Home;
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import withAuthRedirect from '@/app/utils/withAuthRedirect';
import { useToast } from '@/hooks/use-toast';

function SignupPage() {
  const { toast } = useToast();
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [error,SetError]=useState("")
  const router=useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            'https://socooo-backend.onrender.com/api/login',  // Update this to the correct login endpoint
            { email, password },
            { withCredentials: true } // This includes credentials (cookies) with the request
        );

        if (response.status >= 200 && response.status < 300) {
            toast({
                title: "Welcome Back.."
              })
            router.push("/feed"); // Redirect to the feed page
        } else {
            // In case of unexpected status codes (not in 2xx range)
            alert(`Unexpected response: ${response.status}`);
        }
    } catch (error) {
        // Improved error handling
        if (error.response) {
            // If the error comes from the server, we access error.response data
            SetError(error.response.data.message || "Something went wrong with the response.");
            console.log("Error response:", error.response);
            toast({
                title: error.response.data.message
              })
           
        } else if (error.request) {
            // If no response is received from the server
            SetError("No response received from server.");
            console.log("Error request:", error.request);
        } else {
            // If there's an issue setting up the request
            SetError(error.message || "An unexpected error occurred.");
            console.log("Error:", error.message);
        }
    }
};

  


  return (
    <div className='w-full flex items-center justify-center h-screen'>
        <div id="signup-box" className='w-80 px-4 py-7   md:w-[40%] md:py-10 border rounded-xl '>
        <h1 className='text-xl font-semibold font-mono md:text-4xl  text-center'>Welcome back</h1>
        <form className='mt-7 flex flex-col  md:flex-row md:mt-28 md:gap-28  items-center gap-4' onSubmit={handelSubmit}>
       <div className='flex flex-col items-center md:text-2xl font-semibold w-full font-mono gap-5'>
       
        <div className=' md:w-[80%] '>
            <h1>Enter Email</h1>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="px-3" placeholder="user@gmail.com " />
        </div>
        <div className=' md:w-[80%] '>
            <h1>Enter Password</h1>
            <Input type="password"  value={password} onChange={(e)=>setpassword(e.target.value)} className="px-3" placeholder="......" />
       </div>
        <Button className=' md:w-[50%] '>Login</Button>
        </div>
        </form>
            </div>
    </div>
  )
}

export default withAuthRedirect(SignupPage)
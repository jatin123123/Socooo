import React from 'react'

function createpostforDesktop() {
  
  return (
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
  )
}

export default createpostforDesktop
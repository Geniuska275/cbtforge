import React from 'react'
import image from './bg2.jpeg'
function ForgottenPassword() {
  return (
    <div className="flex flex-wrap">

    <div className="w-[1000px]">
    <div className='Hero flex justify-center items-center'>
        <img src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display '>
        <h1 className="font-bold text-3xl text-white font-[Poppins] mt-3">Are you ready for the CBT FORGE Mobile App ?</h1>
        <p className="text-white mt-3 font-[Poppins]">We are working on the mobile application for iphone,ipad and Android .<br></br>This will give your examiners more options on where to take exams.</p>
                 </div> 
    </div>
    </div>
    <div className="bg-white">
      <form className='mt-[160px] ml-[40px]'>
      
          <h1 className="font-bold text-xl">Forgotten Password ?</h1>
        
         <label className='ml-0 mb-0'>Email</label><br></br>
        <input type="text" className="w-[300px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your email"/><br></br>
        <label className='ml-0 mb-0'>New Password</label><br></br>

        <input type="text" className="w-[300px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="New Password"/><br></br>
        <label className='ml-0 mb-0'>Confirm Password</label><br></br>
        <input type="text" className="w-[300px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password"/><br></br>
       

       <button className=" rounded-xl py-2 w-[300px] bg-[#7EC5FF] font-bold mt-2 font-[Poppins] mt-4 hover:bg-black hover:text-white hover:border ">LOG ME IN</button>
        




      </form>

    </div>


  </div>
  )
}

export default ForgottenPassword
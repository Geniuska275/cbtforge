
import image from './bg.jpeg'
// import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className='Hero flex justify-center items-center'>
        <img src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display'>
     
         <marquee> <h1 className=' tests font-bold text-6xl text-center text-white font-[Poppins]'>
            <span className='text-[#7EC5FF]'>WELCOME</span> TO CBT FORGE</h1></marquee>
           <h2 className='text font-bold text-white text-center text-3xl mt-4 font-[Poppins]'>Multi-purpose Cloud-Based Assessment Platform</h2>
            <p className='text text-white text-center text-xl mt-3 font-[Poppins]'>We have created a multi-purpose LMS for Organizational needs.</p>
           
            <p className=' text-white text-center text-xl mt-3 font-[Poppins]' >Your one stop LMS for School examination ,recruitment,training and scholarship tests.</p>
            <div className=' flex justify-center items-center flex-wrap gap-3 mt-[40px] ma '>
              <button className=' py-2 px-8 bg-[#7EC5FF] rounded-3xl font-bold font-[Poppins] hover:bg-black hover:border hover:text-white'>GET STARTED</button>
              <button className='py-2 px-8 bg-black border rounded-3xl font-bold font-[Poppins] text-white hover:bg-[#7EC5FF] hover:border hover:text-black'>SEE ALL PLANS</button>
            </div>
        </div> 
    </div>
  )
}

export default Hero
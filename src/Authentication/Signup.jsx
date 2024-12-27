import image from "./bg4.jpeg"


function Signup() {
  return (
    <div className="flex flex-wrap ">

<div className="w-[900px]">
    <div className='Hero flex justify-center items-center'>
        <img
         src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display p-[20px]'>
        <h1 className="lg font-bold text-3xl text-white font-[Poppins] mt-3">Are you ready for the CBT FORGE Mobile App ?</h1>
        <p className="text-white mt-3 font-[Poppins]">We are working on the mobile application for iphone,ipad and Android .<br></br>This will give your examiners more options on where to take exams.</p>
                 </div> 
    </div>
    </div>
    <div className="bg-white mt-[40px] ml-[40px]">
      <form>
      
          <h1 className="font-bold text-2xl">Sign Up</h1>
          <p>Create CBT Forge Account</p>
        
         <label className='ml-0 mb-0'>Name</label><br></br>
        <input type="text" className="in w-[200px] mr-2 px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your firstname"/>
        <input type="text" className="in w-[200px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your lastname"/><br></br>

        <label className='ml-0 mb-0'>Organization</label><br></br>

        <input type="text" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="New Password"/><br></br>
        <label className=' ml-0 mb-0'>Email</label><br></br>
        <input type="text" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password"/><br></br>
        <label className='ml-0 mb-0'>Password</label><br></br>
        <input type="password" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password"/><br></br>
        <label className='ml-0 mb-0'>Re-enter Password</label><br></br>
        <input type="password" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password"/><br></br>
        <div className="flex gap-2 mt-3  ml-1 items-center">
            <input type="checkbox" className="mb-6" />
            <p>By clicking Sign Up ,you agree to our Terms <br></br> and Conditions that you have read our Privacy Policy.</p>
          </div>

       <button className=" in rounded py-2 w-[400px] bg-[#7EC5FF] font-bold  font-[Poppins] mt-4 hover:bg-black hover:text-white hover:border ">SIGN ME IN</button>
        <p className="mt-3 ">Already a member ? Click <span className="text-[#7EC5FF]">here</span> to Login .</p>




      </form>

    </div>


  </div>
  )
}

export default Signup
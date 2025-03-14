import image from "./cbt.png"
function Footer() {
  return (
    <div className="bg-black text-white font-bold font-[Poppins] p-[60px] mt-3">
      <div className="flex justify-between flex-wrap items-center">

        <img src={image} className="rounded-full w-[100px] h-[100px] bg-[#7EC5FF] flex justify-center items-center mb-3" />
       
       <div className="flex gap-[50px]">
        <div>
          
          <ul>
            <li>SiteMap</li>
            <li>Privacy Policy</li>
            <li>Job Seekers</li>
            <li>Blog</li>


          </ul>
        </div>
        <div>
        
          <ul>
            <li>FaceBook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

       </div>



      </div>
      <h1 className="text-center mt-4">@CBT Forge {new Date().getFullYear()}.All rights reserved.</h1>


    </div>
  )
}

export default Footer
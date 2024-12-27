import image from "./bg2.jpeg"

function Book() {
  return (
    <div className='Heroes flex flex-wrap justify-center items-center'>
        <img src={image} className='videos'/>
        <div className='bg-overlay'></div>
        <div className="display flex flex-wrap justify-between items-center">
          <div className="mr-[80px]">
              <h1 className=" text font-bold text-white text-4xl text-[Poppins]"><span className="text-[#7EC5FF]">Book a Demo</span> and Transform Your <br></br>Testing  Experience</h1>
              <h3 className=" text text-white mt-4 text-xl font-bold">Try it out and see the possibilities!</h3>
          </div>
          <div>
            <form>
              <div className="flex gap-2 items-center mb-2">
                <h4 className="text-md text-[#7EC5FF] font-bold font-[Poppins]">Name<sup>*</sup></h4>
                <input type="text" className=" btns w-[340px] ml-5 px-16 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter Name"/>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <h4 className="text-md text-[#7EC5FF] font-bold font-[Poppins]">Email<sup>*</sup></h4>
                <input type="text" className="btns w-[340px] ml-5 px-16 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF] m-3" placeholder="Enter Email"/>
              </div>
              <div className="flex gap-4 items-center mb-2">
                <h4 className="text-md text-[#7EC5FF] font-bold font-[Poppins]">Message<sup>*</sup></h4>
                <input type="text" className="btns w-full px-16 py-8 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter a Message..."/>
              </div>
              <button className="ml btns w-[340px] mt-3 m-auto py-2 bg-[#7EC5FF] text-black ml-[80px] border-none rounded shadow hover:bg-black hover:text-white hover:border-white">BOOK A DEMO</button>



            </form>


          </div>



        </div>
       
        
    </div>
  )
}

export default Book
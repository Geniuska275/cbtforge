
function Contact() {
  return (
    <div className="mt-5 font-[Poppins]">

      <h1 className="text-center">Find the perfect CBT solution for you </h1>
      <h1 className="font-bold text-2xl text-center">Contact Us</h1>
      <p className="text-center">Have a question or need an assistance ? we are here to help.</p>
      <div className="flex justify-center items-center mt-5">

      <form className="form">
        <label>Your Name</label><br></br>
        <input className="input" placeholder="Enter Your Name"/><br></br>
        <label>Your Email</label><br></br>
        <input  className=" input"  placeholder="Enter Your Email" /><br></br>
        <label>Your Message</label><br></br>
        <textarea className=" input h-[150px]"  placeholder="Enter Your Message...">

        </textarea><br></br>
        <div className="flex  ">

        <input type="checkbox"  />
        <span className="font-bold ml-1">Agree to terms and conditions.</span>
        </div>
        <button className=" bt rounded-xl py-3 w-[350px] bg-[#7EC5FF] font-bold mt-2 font-[Poppins] hover:bg-black hover:text-white hover:border">Send Message</button>





        
      </form>
      </div>
    </div>
  )
}

export default Contact
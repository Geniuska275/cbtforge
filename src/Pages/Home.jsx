import Hero from "../components/Header";
import Book from "./Book";
import Features from "./Features";


function Home() {
  return (
    <div>
      <Hero/>
      <div className="flex justify-center items-center">
        <div>
        <h1 className="font-bold text-2xl text-center mt-4">CBT FORGE</h1>
        <h4 className='p-1 bg-[#7EC5FF] w-[120px]  m-auto mt-1 rounded-full mb-2'></h4>
        <p>Staying at the forefront of Technology to meet modern assessment demands.</p>
        </div>
      </div>

      <div className="flex justify-around flex-wrap items-center mb-[200px] mt-8 ">

        <div className="w-[300px] h-[100px]">
          <h2 className="font-bold text-xl mb-2">How It Works</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa illum ratione non reiciendis omnis voluptatum, temporibus est a deserunt explicabo. Perspiciatis et cumque fugiat laudantium iure magnam iusto modi!
          </p>
          

        </div>
        <div className="w-[300px] h-[100px]">
          <h2 className="font-bold text-xl mb-2">What are People Saying ?</h2>
          <p className="bg-gray-300 rounded p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa illum ratione non reiciendis omnis voluptatum, temporibus est a deserunt explicabo. Perspiciatis et cumque fugiat laudantium iure magnam iusto modi!
          </p>
          
        </div>

        <div className="w-[300px] h-[100px]">
          <h2 className="font-bold text-xl mb-2">Why Cbt Forge ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa illum ratione non reiciendis omnis voluptatum, temporibus est a deserunt explicabo. Perspiciatis et cumque fugiat laudantium iure magnam iusto modi!
          </p>
        </div>

      </div>
      <Book/>
      <Features/>
      <div className="bg-black p-[60px] mt-8 shadow-lg">

        <h1 className="text-white font-bold text-3xl font-[Poppins]">FIND THE PERFECT <span className="text-[#7EC5FF]">CBT</span> SOLUTION</h1>
        <p className="text-white mt-2 font-bold">Discover our comprehensive range of CBT products designed to meet your unique needs.</p>
        <div className="flex items-center gap-3">
        <input type="email" className=" px-10 py-2 mt-3 border border-[#7EC5FF] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter Your Email..."/>
          <button className="h-[40px] w-[200px] bg-[#7EC5FF]  rounded-xl font-bold mt-3 hover:border hover:text-white hover:bg-black">TRY 4 FREE</button>
        </div>
        <p className="text-white mt-2 font-bold">By Clicking sign up you are confirming that you agree to our terms and conditions.</p>

      </div>
    </div>
  )
}

export default Home;
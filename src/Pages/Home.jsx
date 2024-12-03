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

      <div className="flex justify-around items-center mb-[200px] mt-8 ">

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
    </div>
  )
}

export default Home;
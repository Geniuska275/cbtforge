import Forge from "../components/Forge";
import Hero from "../components/Header";
import Perfect from "../components/Perfect";
import Book from "./Book";
import Contact from "./Contact";
import Features from "./Features";


function Home() {
  return (
    <>
      <Hero/>
      <Forge/>
      <Book/>
      <Features/>
      <Perfect/>
      <Contact/>
    </>
  )
}

export default Home;
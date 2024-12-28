import Forge from "../components/Forge";
import Hero from "../components/Header";
import Perfect from "../components/Perfect";
import Book from "./Book";
import Contact from "./Contact";
import Features from "./Features";
import { motion } from "framer-motion"

function Home() {
  return (
    <>
      <Hero/>
      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.5}}>
    
      <Forge/>
      </motion.div>
      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.5}}>
     
      <Book/>
      </motion.div>
      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.5}}>
     
      
      <Features/>
      </motion.div>
      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}>
      <Perfect/>
      </motion.div>
      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}> 
      <Contact/>
      </motion.div>
    </>
  )
}

export default Home;
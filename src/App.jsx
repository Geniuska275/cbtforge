
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Book from "./Pages/Book";
import Tryforfree from "./Pages/Tryfofree";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import ForgottenPassword from './Authentication/ForgottenPassword';











function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Features" element={<Features/>} />

      <Route path="/About" element={<About/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Features" element={<Features/>} />
      <Route path="/Pricing" element={<Pricing/>} />
      <Route path="/Book-for-a-demo" element={<Book/>} />
      <Route path="/Try-for-free" element={<Tryforfree/>} />
      <Route path="/SignUp" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/ForgotPassword" element={<ForgottenPassword/>} />


      <Route path="/Tryforfree" element={<Tryforfree/>} />

      
    </Routes>
    <div style={{
        position:"fixed",
        bottom:"70px",
        background:" #37CA2A",
        width:"55px",
        height:"55px",
        borderRadius:"50%",
        right:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000
       

      }}>

         <div
        style={{
          width:"45px",
        height:"45px",
        borderRadius:"50%",
        borderWidth:"2px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
        >
        <a href="https://wa.me/+2349046842129">     
        <FaWhatsapp color='white' size={25} />
      </a>
        </div>
      </div>


      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.5}}>
      <Footer/>
      </motion.div>
    
  </Router>

   
  )
}

export default App

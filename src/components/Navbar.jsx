
import { FaTimes, FaBars } from "react-icons/fa";
// import logo from "./real.jpeg";
import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";





export default function Navbar(){
     const [isOpen,setIsOpen]=useState(false)
     const toggle=()=>{
        setIsOpen(!isOpen)
     }
    const [activeTab, setActiveTab] = useState("home");
    const location = useLocation();
    useEffect(() => {
      if (location.pathname == "/") {
        setActiveTab("home");
      } else if (location.pathname == "/About") {
        setActiveTab("About");
      } else if (location.pathname=="/Pricing") {
        setActiveTab("Pricing");
      }else if (location.pathname=="/Product") {
        setActiveTab("Product");
      }else if (location.pathname=="/Contact") {
        setActiveTab("Contact");
      }else if (location.pathname=="/Book-for-a-demo") {
      setActiveTab("Book-for-a-demo");
    }else if (location.pathname=="/Try-for-free") {
    setActiveTab("Try-for-free");
  }else if (location.pathname=="/Features") {
    setActiveTab("Features");
  }
      
    }, [location]);
    return(
        <div className=" shadow-sm w-full sticky border-b top-0 py-2 bg-[#000000] z-[10] font-[Poppins]"> 
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    {/* navbar logo */}
                <Link to="/">
                <div className="flex gap-1 items-center ">

                <span  className="w-10 h-10 rounded-full"></span>
                <h1 className="font-[lato] text-[#7EC5FF] font-bold text-2xl ">CBT-FORGE.</h1>
                </div>
                </Link>
                {/* end */}
                {/* navbar links */}
            {/* end */}
              {/*  */}

              <div className=" hidden md:flex  justify-between items-center p-4 gap-5 mr-[40px] font-[lato]">

            <Link  to="/"
             className={`${activeTab =="home" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >HOME
            </Link>
            <Link  to="/Features"
             className={`${activeTab =="Features" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >FEATURES
            </Link>
            <Link  to="/About"
             className={`${activeTab =="About" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >ABOUT
            </Link>
            <Link  to="/Product"
             className={`${activeTab =="Product" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >PRODUCT
            </Link>
            <Link  to="/Pricing"
             className={`${activeTab =="Pricing" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >PRICING
            </Link>
            <Link  to="/Book-for-a-demo"
             className={`${activeTab =="Book-for-a-demo" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >BOOK A DEMO
            </Link>
            <Link  to="/Try-for-free"
             className={`${activeTab =="Try-for-free" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >TRY FOR FREE
            </Link>
            <Link  to="/Contact"
             className={`${activeTab =="Contact" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >CONTACT
            </Link>
           
        <div className="flex justify-evenly items-center gap-2 mt-2">
        <Link  to="/Signup"
             className={`${activeTab =="Contact" ? "text-[#7EC5FF]":"text-white"}  font-[lato] no-underline font-bold`}    
            >

         <button className="bg-black border md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-[#7EC5FF] hover:text-black duration-500">SIGN UP</button>
        
           </Link>
        <Link  to='/Login'>
         <button className="bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-black hover:border duration-500">LOGIN</button>
           </Link>
        
        </div>
        </div>
        {/*  */}

           {isOpen ?
           <div className="md:hidden">
            <FaTimes         
            onClick={toggle}
            
            className="text-[#7EC5FF] text-2xl "
            />
            </div>
            :
            <div className="md:hidden border rounded bg-[#7EC5FF] p-2">
            
            <FaBars
            
            onClick={toggle}
            className="text-[white] text-2xl"
            
            />
            </div>
            
        }
          

        
        </div>
        </div>
        </nav>
        {
            isOpen ?(
                <div className="md:hidden mt-5 border-t font-[lato] bg-black w-full flex z-[10] justify-center items-center">
    
        <div className=" flex flex-col justify-center items-center p-4 ">
        <Link  to="/" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="home" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >HOME
            </Link>
            <Link  to="/Features" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Features" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >FEATURES
            </Link>
            <Link  to="/About" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="About" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >ABOUT
            </Link>
            <Link  to="/Pricing" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Pricing" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >PRICING
            </Link>
            <Link  to="/Products" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Products" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >PRODUCT
            </Link>
            <Link  to="/Contact" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Contact" ? "text-[#7EC5FF]":"text-white"} no-underline font-bold`}    
            >CONTACT
            </Link>
            
           
      
        <div className="flex justify-evenly items-center gap-3 mt-2">
      
        <Link to='/Signup'>
         <button className="bg-black md:ml-8 rounded-md border   font-[lato] px-6 py-2 text-white shadow-lg hover:bg-[#7EC5FF] duration-500">SIGN UP</button>
        </Link>
         <Link to="/Login">
         <button className="bg-[#7EC5FF] md:ml-8 rounded-md border  font-[lato] px-6 py-2 text-white shadow-lg hover:bg-black duration-500">LOGIN</button>
         </Link>
         
        </div>

        </div>
    
                </div>
            ):null
        }
        </div>
    )
}
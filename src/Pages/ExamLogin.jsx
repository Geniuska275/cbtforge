import { useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "./bg2.jpeg"
import images from "../components/cbt.png"
import {  useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



function ExamLogin(props) {
  const [show,setShow]=useState(true)

  if (!props.isAuth) {
    return <Navigate to='/login' />;
  }
  return (
    <div className="flex flex-wrap">

<div className="w-[1000px]">
    <div className='Hero flex justify-center items-center'>
        <img src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display '>
          <h1 className="lg font-bold text-3xl text-white font-[Poppins] mt-3">Let the Exam journey begin...</h1>

                 </div> 
    </div>
    </div>
      <div className="bg-white p-4 flex ">
        <form className="mt-[160px] ml-4">

          <div className="flex gap-2 items-center mb-3">
      <img src={images}  className="rounded-full w-10 h-10 shadow"/>
          
            <h1 className="font-bold text-xl ">CBT FORGE</h1>
          </div>
          <label className="ml-[-1px]">Name</label><br></br>
          <input type="text" className="w-[300px] px-6 py-2  rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Display student's registered name"/><br></br><br></br>
          <label className="ml-[-1px]">Enter exam Id</label><br></br>
          <input type="text" className="w-[300px] px-6 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter Exam id"/><br></br><br></br>
          <label className="ml-[-1px]">Enter Exam Code</label><br></br>
          <input type="text" className="w-[300px] px-6 py-2  rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter Exam Code"/><br></br>


    
    
         <button className=" rounded-xl py-2 w-[300px] bg-[#7EC5FF] font-bold mt-2 font-[Poppins] hover:bg-black hover:text-white hover:border">SUBMIT</button>
     



        </form>

      </div>


    </div>
  )
}




const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ExamLogin);
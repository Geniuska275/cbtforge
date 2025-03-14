import image from "./bg4.jpeg"

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeAlert, setAlert } from "../actions/alert";
import Alert from "./Alert";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { register } from '../actions/auth';





function Signup(props) {
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [password2,setPassword2]=useState()
  const [organization,setOrganization]=useState()
 


  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'error');
    } else {
      props.register({ firstname,lastname,email,organization, password });
    }
  };


  // If already auth, redirect to dashboard
  if (props.isAuth) {
    return <Navigate to='/Login' />;
  }




  return (
    <div className="flex flex-wrap ">
      
       <Alert/>
<div className="w-[900px]">
    <div className='Hero flex justify-center items-center'>
        <img
         src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display p-[20px]'>
        <h1 className="lg font-bold text-3xl text-white font-[Poppins] mt-3"> you ready for the CBT FORGE Mobile App ?</h1>
        <p className="text-white mt-3 font-[Poppins]"> are working on the mobile application for iphone,ipad and Android .<br></br>This will give your examiners more options on where to take exams.</p>
                 </div> 
    </div>
    </div>
    <div className="bg-white mt-[40px] ml-[40px]">
      <form>
      
          <h1 className="font-bold text-2xl">Sign Up</h1>
          <p>Create CBT Forge Account?</p>
        
         <label className='ml-0 mb-0'>Name</label><br></br>
        <input
         type="text"
         className="in w-[200px] mr-2 px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your firstname" onChange={(e)=>setFirstname(e.target.value)} required/>
        <input type="text" className="in w-[200px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your lastname" onChange={(e)=>setLastname(e.target.value)} required/><br></br>

        <label className='ml-0 mb-0'>Organization</label><br></br>

        <input type="text" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter your Organization" onChange={(e)=>setOrganization(e.target.value)} required/><br></br>
        <label className=' ml-0 mb-0'>Email</label><br></br>
        <input type="text" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} required/><br></br>
        <label className='ml-0 mb-0'>Password</label><br></br>
        <input type="password" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password" onChange={(e)=>setPassword(e.target.value)} required/><br></br>
        <label className='ml-0 mb-0'>Re-enter Password</label><br></br>
        <input type="password" className="in w-[410px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Confirm Password" onChange={(e)=>setPassword2(e.target.value)} required/><br></br>
        <div className="flex gap-2 mt-3  ml-1 items-center">
            <input type="checkbox" className="mb-6" />
            <p>By clicking Sign Up ,you agree to our Terms <br></br> and Conditions that you have read our Privacy Policy.</p>
          </div>

       <button onClick={onSubmit} className=" in rounded py-2 w-[400px] bg-[#7EC5FF] font-bold  font-[Poppins] mt-4 hover:bg-black hover:text-white hover:border ">SIGN ME IN</button>
        <p className="mt-3 ">Already a member ? Click <span className="text-[#7EC5FF]">here</span> to Login .</p>
      </form>
    </div>
  </div>
  )
}
Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  loading: state.auth.loading,
  alerts: state.alert,
});

export default connect(mapStateToProps, { setAlert, removeAlert, register })(Signup);
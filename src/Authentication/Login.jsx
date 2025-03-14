import { useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "./bg3.jpeg"
import images from "../components/cbt.png"

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeAlert, setAlert } from "../actions/alert";
import Alert from "./Alert";
import { login } from "../actions/auth";
import PropTypes from 'prop-types';


function Login(props) {
  const [show,setShow]=useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  // If already auth, redirect to dashboard
  if (props.isAuthenticated) {
    return <Navigate to='/Exam' />;
  }


  return (
    <div className="flex flex-wrap">
      <Alert/>

<div className="w-[1000px]">
    <div className='Hero flex justify-center items-center'>
        <img src={image} className='video'/>
        <div className='bg-overlay'></div>
        <div className='display p-[20px] '>
          <h1 className="lg font-bold text-3xl text-white font-[Poppins] mt-3">Are you ready for the CBT FORGE Mobile App ?</h1>
          <p className="small text-white mt-3 font-[Poppins]">We are working on the mobile application for iphone,ipad and Android .<br></br>This will give your examiners more options on where to take exams.</p>
                 </div> 
    </div>
    </div>
      <div className="bg-white p-4 flex ">
        <form className="mt-[160px] ml-4">
          <div className="flex gap-2 items-center">
      <img src={images}  className="rounded-full w-10 h-10 shadow"/>
          
            <h1 className="font-bold text-xl">CBT FORGE</h1>
          </div>
          <p className="mt-2 ml-1">Login to your Organization.</p>
          <input type="text" className="w-[300px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/><br></br>
          <div style={{position:'relative'}} >
            {show ?<FaRegEye className="eye" style={{position:"absolute",right:"20px",top:"25px",fontSize:"20px"}} onClick={()=>setShow(prev=>!prev)}/>:
            <FaRegEyeSlash className="eye" style={{position:"absolute",right:"20px",top:"25px",fontSize:"20px"}} onClick={()=>setShow(prev=>!prev)}/>}

          <input type={show ? 'text' :'password'} className="w-[300px] px-6 py-2 mt-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF]" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="flex gap-2 mt-3 mb-3 ml-1">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
         <button onClick={onSubmit} className=" rounded-xl py-2 w-[300px] bg-[#7EC5FF] font-bold mt-2 font-[Poppins] hover:bg-black hover:text-white hover:border">LOG ME IN</button>
          <Link to='/ForgotPassword'>
          <p className="text-[#7EC5FF] mt-2">Forgotten Password ?</p>
          </Link>
         




        </form>

      </div>


    </div>
  )
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  alerts: state.alert,
});

export default connect(mapStateToProps, { login,setAlert, removeAlert, })(Login);
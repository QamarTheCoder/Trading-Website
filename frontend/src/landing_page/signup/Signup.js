import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'

function Signup() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


    const handleSuccess=(msg)=>{
        toast.success(msg,{position:'top-right'})
    }

    const handleError=(err)=>{
        toast.error(err,{position:'top-right'})
    }
    const handleOnClick= async (e)=>{
        e.preventDefault()
        const {data}= await axios.post('http://localhost:2020/signup',{
            email:email,
            username:username,
            password:password
        },
        {withCredentials:true}
    )
    const {success,message}=data;
    console.log(message)
    if (success){
        handleSuccess(message);
        setTimeout(()=>{
            window.location.href="http://localhost:3001/"
        },1000)
    }else{
        handleError(message)
    }

    }
    
  return (
    <div className="d-flex justify-content-center mt-5 ">
        <ToastContainer />
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Signup</h3>
        <form aria-label="signup form">
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="col">
              <label htmlFor="name" className="form-label">Username</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <div className="d-grid">
            <button className="btn btn-outline-primary" onClick={handleOnClick}>Signup</button>
          </div>
          <p className='mt-3 text-center'>Already have an Account? <Link to={"/login"} style={{textDecoration:'none'}} >Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

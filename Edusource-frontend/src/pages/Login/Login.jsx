import React from 'react'
import "./Login.css"
import logoimg from "../../images/logo.png"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  
  return (
    <div className='login-container'>
        <form className='login-form'>
            <img src={logoimg} alt="nothing" />
        <h2 style={{textAlign:"center"}}>Login to your account</h2>
            <label for="username">Username : <input type="text" id="username" placeholder='Enter your username' /></label>
            <label for="password">Password : <input type="password" id="password" placeholder='Enter your password' /></label>
            <div className="log-butt"><button type="submit">login</button></div>
            <div className="signup-butt"><Link to="/signup">No account then signup</Link></div>
            <div className="signup-butt"><Link to="/">Go back to home</Link></div>
        </form>
    </div>
  )
}

export default Login
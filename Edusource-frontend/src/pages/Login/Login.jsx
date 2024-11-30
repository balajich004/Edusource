import React from 'react'
import "./Login.css"
import logoimg from "../../images/logo.png"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  const validate=(e)=>{
    e.preventDefault()
    let name=document.getElementById('username').value
    axios.get('http://localhost:8083/user/login/'+name)
    .then(res=>{
        localStorage.setItem('name',res.data.name)
        localStorage.setItem('password',res.data.password)
        localStorage.setItem('email',res.data.email)
        // localStorage.setItem('mobilenumber',res.data.date_of_birth)
        localStorage.setItem('isAuthor',res.data.isAuthor)
        localStorage.setItem('role', res.role)
    })
    .catch(err=>{
        localStorage.removeItem('name')
        localStorage.removeItem('password')
        localStorage.removeItem('email')
        localStorage.removeItem('role')
        localStorage.removeItem('isAuthor')
        localStorage.setItem('error', err.data)
    })

    let err;
    setTimeout(()=>{
        err=(localStorage.getItem('error'))
        
        if(err!=="Stop"){
            let password = document.getElementById('password').value
            if(password === localStorage.getItem('password')){
                localStorage.setItem('isLoggedIn', true)
                navigate('/')
            }
            else   
                alert('Incorrect Password')
        }else{
            alert("A user with provided username doesn't exist")
        }
   },100)

}

  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={validate}>
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
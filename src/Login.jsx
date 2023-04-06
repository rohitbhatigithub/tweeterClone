import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login({setCheck,check}) {
  return (
    <div className='login'>
    <div className='signupContainer'>
    <p className='userName'>Signup</p>
         <input type="email" required placeholder='Email'
            onChange={(e)=>setCheck({email:e.target.value})}
         />
         <br></br>
         <input type="Password" required placeholder='Password'
             onChange={(e)=>setCheck({password:e.target.value})}
         />
         <br></br>
         <Link to="/"><button className='login-btn'>Go to home</button></Link>
    </div>
    </div>
  )
}

export default Login

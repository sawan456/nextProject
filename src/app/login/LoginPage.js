import React from 'react'
import { signIn } from 'next-auth/react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
      <h1 className='mainheading'>
        <span style={{backgroundColor:"#0088cc",color:"white"}}>Admin</span> <span style={{backgroundColor:"black",color:"white",marginLeft:"-1rem"}}>_LogIn</span>
      </h1>

      <div className='logAuth'>
        <img src="./image/botLogoa.png" style={{marginLeft:"41.5%"}}/>
        <button onClick={()=>signIn("google")}>
        
          <img src='./image/google.png' style={{width:"2rem",height:"2rem",marginRight:"1rem"}} />
          <p>Sign in with Google</p>

        </button>

        <p className="footLine">Hey Admin Please Login..!</p>
      </div>
    </>
  )
}

export default LoginPage
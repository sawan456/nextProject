"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import "./page.css"
import AdminPanel from './AdminPanel'
import LoginPage from './LoginPage'

const Login = () => {
    const session = useSession();
    // console.log(session);
    
    if(session.status === "loading"){
      return <p className='loading'>
        <img src='./image/loading.gif'/>
      </p>
    }
    if(session.status === "authenticated"){
      return (
        <>
        <AdminPanel/>
        </>
      )
    }
    if(session.status === "unauthenticated"){
      return (
        <>
          <LoginPage/>
        </>
      )
    }

}

export default Login
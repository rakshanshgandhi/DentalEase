"use client"
import React from 'react'
import {signIn, useSession} from 'next-auth/react'

const LoginBtn = () => {
    const session = useSession();
    console.log(session);
  return (
    <div>
      <button onClick={()=>signIn("google")}>Log in with google</button>
    </div>
  )
}

export default LoginBtn

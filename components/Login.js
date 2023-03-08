import Image from 'next/image';
import React from 'react';
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className="grid place-items-center">
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
        height={400}
        width={400}
        alt="image"
        priority
         />
         <h1 onClick={() => signIn()} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login</h1>
    </div>
  )
}

export default Login
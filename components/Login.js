import Image from 'next/image';
import React from 'react';
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className="grid place-items-center">
        <Image
        src="https://www.quinneysbush.co.nz/wp-content/uploads/2021/04/cropped-Facebook-logo.png"
        height={400}
        width={400}
        alt="image"
         />
         <h1 onClick={() => signIn()} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login</h1>
    </div>
  )
}

export default Login
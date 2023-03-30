import { Timestamp } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'

function Post({ name, message, email, image, postImage, createdAt }) {
  return (
      <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounted-t-2xl shadow-sm">
          <div className="flex items-center space-x-2">
                <img className="rounded-full" src={image} width={40} height={40} alt="profile image" />

                <div>

                <p>{name}</p>
                <p>{new Date(createdAt?.toDate()).toLocaleString()}</p>

                </div>

          </div>

          <p className="pt-4">{message}</p>
        </div>

        {image && (
          <div className="relative">
            <Image src={postImage} alt="postImage"/>
          </div>
        )}
        
      </div>
  )
}

export default Post
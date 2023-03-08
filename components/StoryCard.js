import Image from 'next/image'
import React from 'react'

function StoryCard({name, src, profile }) {
  return (
    <div className="relative h-14 w-14">
      <Image className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
      src={profile}
      width={40}
      height={40}
      
      alt=""
      />
    <Image className="object-cover filter brithtness-75 rounded-full lg:rounded-3xl"
      src={profile}
      width={40}
      height={40}
      
      alt=""
      />
    </div>
  )
}

export default StoryCard

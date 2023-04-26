import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/outline'
import React from 'react'
import Contact from './Contact'

const contacts = [
    {
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-NEVnt_RkfFY%2FV1OA-OYPmMI%2FAAAAAAAAFk8%2FrKqlOe1Ibn0-y7ym0kWHYWLL2wDVD4nuQCLcB%2Fs1600%2FIndiana_Jones.png&f=1&nofb=1&ipt=7689a2215808334d4f6b3758e5eab1fca0edb4fe830fd91e8b397f91d1617355&ipo=images", name: "indiana jones"
    }
]


const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
            <VideoCameraIcon className="h-6" />
            <SearchIcon className="h-6" />
            <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map(contact => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets

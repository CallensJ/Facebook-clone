import Image from "next/image";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react"

function Header() {
  const {data:session} = useSession();
  console.log(session);

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*======navbar logo ======*/}
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          alt="logo"
          width={40}
          height={40}
          
        />
         {/*====== searchbar ======*/}
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className=" hidden md:inline-flex ml-2 items-center bg-transparent  outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Rechercher sur Facebook"
          />
        </div>
      </div>
      {/*======navbar icons ======*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/*======navbar options ======*/}
      <div className="flex items-center sm:space-x-2 justify-end">
        
            <Image onClick={() => signOut()}
            className="rounded-full cursor-pointer"
            src={session}
            width="40"
            height="40"
            alt="profile image"
            />
        
        
        
        <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
        
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;

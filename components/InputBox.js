import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, listAll } from "firebase/storage";
import { v4 } from "uuid";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);
  const imageListRef = ref(storage, "images/");
  const filepickerRef = useRef(null);


  /*======Start uploadImage function======*/
  const uploadImage = () => {
    console.log("submitted");
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Successfully uploaded");
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      //console.log(response);
    });
  }, []);
  /*======End uploadImage function======*/

  /*======Start sendPost function======*/
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    //console.log(inputRef);
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        email: session?.user?.email,
        message: inputRef.current.value,
        name: session?.user?.name,
        image: session?.user?.image,
        createdAt: serverTimestamp(),
      });

      console.log("Message written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error sending message: ", e);
    }
    inputRef.current.value = "";
  };
  /*======End sendPost function======*/

  /*======Start removeImage function======*/
  const removeImage = () => {
    setImageUpload(null);
  };
  /*======End removeImage function======*/
  return (
    <div className="bg-white p-2 rounded-2xl shawow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={40}
          height={40}
          alt=""
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Quoi de neuf, ${session?.user?.name}`}
          />
          <button className="hidden" type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        <div
          onClick={removeImage}
          className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
        >
          <img className="h-10 object-contain" src={uploadImage} alt="" />
          <p className="text-xs text-red-500 text-center">Remove</p>
        </div>
      </div>

      <div className="flex border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Vidéo en direct</p>
        </div>

        <div className="inputIcon" >
          <CameraIcon className="h-7 text-green-400" />
          <p onClick={uploadImage}  className="text-xs sm:text-sm xl:text-base">
            Photo/Video
          </p>
          <input
            ref={filepickerRef}
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            type="file"
            hidden
            
            
            
            
          />
          
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Humeur/ activité</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

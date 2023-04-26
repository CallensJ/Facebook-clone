import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);

  const filepickerRef = useRef(null);


  /*======Start sendPost function======*/
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    //console.log(inputRef);

    const docRef = await addDoc(collection(db, "messages"), {
      email: session?.user?.email,
      message: inputRef.current.value,
      name: session?.user?.name,
      image: session?.user?.image,
      createdAt: serverTimestamp(),
    });
    const imageRef = ref(storage, `images/${docRef.id}`);
    await uploadString(imageRef, imageUpload, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "messages", docRef.id), {
          postImage: downloadURL,
        });
      }
    );
    setImageUpload(null);

    console.log("Message written with ID: ", docRef.id);

    
  };
  /*======End sendPost function======*/

  /*======Start removeImage function======*/
  const removeImage = () => {
    setImageUpload(null);
  };
  /*======End removeImage function======*/
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageUpload(readerEvent.target.result);
    };
  };
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
          <img
            className="h-10 object-contain"
            src={imageUpload}
            onClick={() => setImageUpload(null)}
            alt=""
          />

          <p className="text-xs text-red-500 text-center">Remove</p>
        </div>
      </div>

      <div className="flex border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Vidéo en direct</p>
        </div>

        <div className="inputIcon">
          <form>
            <input
              ref={filepickerRef}
              onChange={addImageToPost}
              hidden
              type="file"
            />
          </form>

          <div
            className="inputIcon"
            onClick={() => filepickerRef.current.click()}
          >
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
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

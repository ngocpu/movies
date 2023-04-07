import React, { useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from "../context/AuthContext"; 
import { db } from "../../firebase";
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
export default function Movies({item}) {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const {user} = UserAuth()
    
    const MovieID = doc(db,'UIusers', `${user?.email}`)

    const saveShow = async() =>{
      if(user?.email){
        setLike(!like)
        setSave(true)
        await updateDoc(MovieID ,{
          savedShows: arrayUnion({
            id:item.id,
            title:item.title,
            img: item.backdrop_path
          })
        })
      } else{
        alert('Please login to save the movies')
      }
    }
  return (
    <div
    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-poiter relative  p-2"

  >
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
        {item?.title}
      </p>
      <p onClick={saveShow}>
        {like ? (
          <FaHeart className="absolute top-4 left-4 text-gray-300" />
        ) : (
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p>
    </div>
  </div>
  );
}

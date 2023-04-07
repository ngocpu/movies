import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import {onSnapshot, doc, setDoc, updateDoc} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

export default function SaveShow() {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()
  const slideLefft = () => {
    let sliderLeft = document.getElementById("slider");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
  };
  const slideRight = () => {
    let slideRight = document.getElementById("slider");
    slideRight.scrollLeft = slideRight.scrollLeft + 500;
  };
   useEffect(() =>{
    onSnapshot(doc(db, 'UIusers' ,`${user?.email}`), (doc) =>{
        setMovies(doc.data()?.savedShows)
    })
   },[user?.email])
   const movieRef = doc(db, 'UIusers', `${user?.email}`)
   const deleteMovie = async (passId) =>{
        try{
            const result = movies.filter(item => item.id !== passId)
            await updateDoc(movieRef ,{
                savedShows: result,
            })
        } catch(error){
            console.log(error);
        }
   }
   console.log(movies);
  return (
    <div>
      <h1 className="text-white font-bold md:text-xl p-4">My Show</h1>
      <div className="relative flex items-center group">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-poiter relative  p-2"
              key={item?.id}
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p className="top-4 right-5 absolute hover:cursor-pointer" onClick={() =>{deleteMovie(item.id)}}><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

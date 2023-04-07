import { React, useState, useEffect } from "react";
import requests from "../api";
import axios from "axios";
export default function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  
  // setTimeout((movie)=>{
  //    movie = movies[Math.floor(Math.random()*movies.length)]
  //   return movie
  // },5000)
  const movie = movies[Math.floor(Math.random()*movies.length)]
  

  function truncateString(string,num){
    if(string?.length >num ){
        return string.slice(0, num) +'...'
    }
    return string
  }
  return (
    <div className="w-full h-[650px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[40%] p-4 md:p-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-5">{movie?.title}</h1>
          <div className="mb-5">
            <button className="border bg-gray-300 py-2 px-5 text-black border-gray-300">
              Play
            </button>
            <button className="border  py-2 px-5 text-white ml-4 border-gray-300">
              Watch Latter
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-3">Reslease:{movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w[50%] xl:max-w[35%] text-gray-200" >{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
}

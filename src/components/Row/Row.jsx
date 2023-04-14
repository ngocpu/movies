import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
export default function Row({title,fetchURL,rowId}) {
    const [movies, setMovies] =useState([])
    useEffect(()=>{
        axios.get(fetchURL).then(res => {
            setMovies(res.data.results)
        })
    },[fetchURL])
    const slideLefft =() =>{
        let sliderLeft = document.getElementById('slider' + rowId)
        sliderLeft.scrollLeft = sliderLeft.scrollLeft -500
    }
    const slideRight =() =>{
        let slideRight = document.getElementById('slider'+ rowId)
        slideRight.scrollLeft = slideRight.scrollLeft +500
    }
  return (
    <div>
        <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
        <div className="relative flex items-center group">
            <MdChevronLeft onClick={slideLefft} className='bg-white left-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer' size={35} />
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                     <Movies item={item} key={id}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white right-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer' size={35} />
        </div>
    </div>
  )
}

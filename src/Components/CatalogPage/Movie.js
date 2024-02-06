import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
export function Movie({img, title, isRented,id,handelOnClickRentedMovie}) {
    

    return (
        <>
            <div className='cardContainer'>
            <div className='title'><span>{title}</span>
            {isRented?<AiOutlineMinusCircle onClick={(event)=>{event.preventDefault();handelOnClickRentedMovie(isRented,id) }} />:<GoPlusCircle onClick={(event)=>{event.preventDefault();handelOnClickRentedMovie(isRented,id) }}  />}</div>
            <img src={img}/>
            </div>
        </>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'
export function MovieDetail({movies}) {
    const { movieId } = useParams();
    console.log(movies)
    const movie = movies.find(movie => movie.id == movieId)
    console.log(movie)
    return (
        <>
        <div className='descr'>
            <h1>{movie.title}</h1>
            <img src={movie.img}/>
            <div>
                <p>
                    {movie.descrShort}
                </p>
            </div>
            <span className='movieYear'>{movie.year}</span>
        </div>
        </>
    )
}

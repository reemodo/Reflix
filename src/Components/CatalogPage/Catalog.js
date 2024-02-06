import React, { useState } from 'react'
import { Movie } from './Movie'
import './Catalog.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export function Catalog({users,movies, setMovies,handelrentedMovie,handleSearch}) {
const [budget,setBudget] = useState(20);
const location = useLocation();
const userName = new URLSearchParams(location.search).get('userName');
if(userName){
   const currentUSerRentedMovies = users.find(user => user.name === userName).rentedMovies
   if(currentUSerRentedMovies != undefined && currentUSerRentedMovies.length!= 0){
const newMovies = movies.map(movie => 
    {if( currentUSerRentedMovies.find((usermovie) => usermovie.name === movie.name) != undefined)
        movie.isRented = true;
    } );
    console.log(newMovies)
    setMovies(newMovies)
   }
   
}
const handelOnClickRentedMovie= (isRented,id)=>{

    if(!isRented){
        if(budget-10 < 0){
            alert("You Dont have enough budget")
        }
        else{
            setBudget(budget-10)
            handelrentedMovie(id,userName);
        }
    }
    else{
        setBudget(budget+10)
        handelrentedMovie(id,userName);
    }
}
    return (
        <>
            <input className="searchBar" type="text" name="search" onChange={(event) => handleSearch(event.target.value)}/>
            <span className="budget">Budget: {budget} $</span>
            <h1>Catalog:</h1>
            <div className='card'>
            {movies.map(movie=><Link to={`/catalog/${movie.id}`} key={movie.id} ><Movie handelOnClickRentedMovie={handelOnClickRentedMovie} id={movie.id} img={movie.img} title={movie.title} isRented={movie.isRented} key={movie.id}/></Link>)}
            </div>
        </>
    )
}

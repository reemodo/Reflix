import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './Components/LandingPage/Landing.js';
import { MOVIES } from './Movies'
import { ReflexNavbar } from './Components/LandingPage/ReflixNavbar.js'
import { ReflixLogo } from './Components/LandingPage/ReflixLogo.js';
import { Catalog } from'./Components/CatalogPage/Catalog.js'
import { MovieDetail } from './Components/MovieDetailPage.js/MovieDetail.js';
import { useState } from 'react';

function App() {
  const USERS = [{name:"Muna",color:"red",rentedMovies:[],budget:20},{name:"Reem",color:"white",rentedMovies:[],budget:20}]
  const [users,setUsers] = useState(USERS);

    const [state, setState] = useState({movies:MOVIES, serchWord:""});
  const handelrentedMovie = (movieId,userName) =>{
    const newMoviesList = [...state.movies]
    const movieIndex = newMoviesList.findIndex((movie) => movie.id == movieId)
    newMoviesList[movieIndex].isRented = !state.movies[movieIndex].isRented
    setState({movies:newMoviesList,serchWord:state.serchWord})
    if(userName & newMoviesList[movieIndex].isRented){
      const newUsers = [...users]
      const userIndex = users.findIndex(user => user.name === userName)
      newUsers[userIndex].rentedMovies.push(movieId)
      setUsers(newUsers)
    }
    else if(userName ){
      const newUsers = [...users]
      const userIndex = users.findIndex(user => user.name === userName)
      const movieIndex = newUsers[userIndex].rentedMovies[userIndex].findIndex(usermovie => usermovie.name === userName )
      newUsers[userIndex].rentedMovies.splice(movieIndex,1)
      setUsers(newUsers)
    }

   
  }
  const handleSearch = (newWord) => {
    if(newWord === ""){
      setState({movies:MOVIES,serchWord:newWord})
    }
    else{
      const filteredMovies = state.movies.filter(movie =>
        movie.title.toLowerCase().includes(newWord.toLowerCase())
      );
      setState({movies:filteredMovies,serchWord:newWord})
    }
   
  };
  const setMovies =(newNovies)=>{
    setState({movies:newNovies,serchWord:state.serchWord})
  }
  return (
    <Router>
      <div className="App">
        <ReflexNavbar/>
        <ReflixLogo/>
      </div>
      <Routes>
      <Route path="/" element={<Landing users={users}/>}/>
      <Route path="/catalog" element={<Catalog users={users} movies={state.movies}setMovies={setMovies} handelrentedMovie={handelrentedMovie} handleSearch={handleSearch}/>}/>
      <Route path="/catalog/:movieId" element={<MovieDetail movies={state.movies}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

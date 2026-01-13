import React from 'react'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import MovieCard from './Components/MovieCard'
import { useState } from 'react'
const App = () => {

const [allMovieData, setallMovieData] = useState([])
const [search, setsearch] = useState('')
const [loading, setloading] = useState(false)


const fetchMovieData = async () => {
  try {
    setloading(true)

    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=fba2d717`
    )

    const data = await res.json()

    if (data.Response === "True") {
      setallMovieData(data.Search)
    } else {
      setallMovieData([])
      console.log(data.Error)
    }

    setloading(false)
  } catch (error) {
    console.log(error)
    setloading(false)
  }
}

  return (
    <div>
      <Navbar/>
      <div className='bg'>
        <SearchBar search={search}
        setsearch={setsearch}
        fetchMovieData = {fetchMovieData}/>
        
        <MovieCard allMovieData = {allMovieData} loading={loading}/>
      </div>
    </div>
  )
}

export default App

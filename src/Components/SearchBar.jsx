
const SearchBar = ({seach, setsearch, fetchMovieData}) => {
  return (
    <div className='main flex justify-center py-3 px-4'>
      <input type="text" placeholder='Search' value={seach}
      onChange={(e)=>setsearch(e.target.value)}
      className='bg-gray-200 w-80 placeholder:bg-gray-100 p-2 outline-none border-2 rounded-l-lg  border-gray-500'/>
      <button
      onClick={fetchMovieData}
      className='bg-[#40407a] cursor-pointer p-4 text-white rounded-r-lg border-b-2 border-t-2 border-r-2 border-gray-500 shadow-md'>
        Search
      </button>
    </div>
  )
}

export default SearchBar

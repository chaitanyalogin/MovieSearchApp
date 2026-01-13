const MovieCard = ({ allMovieData, loading }) => {

  if (loading) {
    return <p className="text-white text-center">Loading...</p>
  }

  if (!allMovieData?.length) {
    return <p className="text-white text-center">No movies found</p>
  }

  return (
    <div className="flex px-4 flex-wrap lg:px-10">
      {allMovieData.map((item) => {
        const { Poster, Title, Year, imdbID } = item

        return (
          <div key={imdbID} className="p-2 lg:w-1/4 sm:w-full">
            <div className="bg-[#002e4b] rounded-2xl p-3">
              <img
                className="w-full rounded-lg mb-2"
                src={Poster !== "N/A" ? Poster : "/no-image.png"}
                alt={Title}
              />
              <h2 className="text-white text-xl font-bold">{Title}</h2>
              <h2 className="text-white text-lg">Year: {Year}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieCard

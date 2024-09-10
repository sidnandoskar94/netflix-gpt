import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, className = '' }) => {
    console.log(movies);

    if (movies?.length <= 0) return null;

    return (
        <div className={`${className} movie-list-wrapper`}>
            <h3 className="movie-list__heading text-xl font-medium px-6 mb-5 text-white">{title || "Now Playing"}</h3>
            <div className="movie-list flex overflow-scroll gap-2">
                {movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default MovieList
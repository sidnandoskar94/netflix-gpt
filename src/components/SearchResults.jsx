import { useSelector } from "react-redux"
import useSearchMovies from "../hooks/useSearchMovies";
import MovieList from "./MovieList";
import { shuffle } from "lodash";

const SearchResults = () => {
    const { searchTerm, result, loading, movieResults } = useSelector(store => store.search);
    const { loading: moviesLoading, error } = useSearchMovies();
    return (
        <div className="search-results">
            <h2 className="pt-24 px-6 mb-6 text-white text-sm">Search results for: <span className="capitalize">"{searchTerm}"</span></h2>
            <div className="search-results__wrapper">
                {loading || moviesLoading && <p className="text-white text-md">Fetching Results...</p>}
                {(!loading || !moviesLoading) && (movieResults.length === 0 && result?.length === 0) && <p className="text-white text-md">No results found for: <span className="capitalize">"{searchTerm}"</span></p>}
                {(!loading || !moviesLoading) && (movieResults.length > 0 && result?.length > 0) && <div>
                    {result?.map((movie, index) => (
                        <MovieList
                            key={movie}
                            title={movie}
                            movies={shuffle(movieResults[index])}
                        />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default SearchResults
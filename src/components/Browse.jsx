import { useSelector } from "react-redux"
import { Header } from "."
import useMovies from "../hooks/useMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
    const { loading, error } = useMovies();
    const movies = useSelector(store => store.movies);

    let mainMovie = [];
    if (movies?.nowPlaying?.length > 0) {
        mainMovie = movies?.nowPlaying[Math.floor(Math.random() * movies?.nowPlaying?.length)];
    }

    return (
        <div className="bg-black">
            <Header />
            {loading && <p>Loading....</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && Object.keys(movies).length > 0 > 0 && <>
                <MainContainer movies={mainMovie} />
                <SecondaryContainer movies={movies} />
            </>}
        </div>
    )
}

export default Browse
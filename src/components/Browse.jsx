import { useSelector } from "react-redux"
import { Header } from "."
import useMovies from "../hooks/useMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
    const { loading, error } = useMovies();
    const movies = useSelector(store => store.movies?.popularMovies);
    let mainMovie = [];
    let secondaryMovie = [];
    if (movies?.length > 0) {
        mainMovie = movies.slice(0, 1);
        secondaryMovie = movies.slice(1);
    }

    return (
        <>
            <Header />
            {loading && <p>Loading....</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && movies?.length > 0 && <>
                <MainContainer movies={mainMovie} />
                <SecondaryContainer movies={secondaryMovie} />
            </>}
        </>
    )
}

export default Browse
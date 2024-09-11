import { useDispatch, useSelector } from "react-redux"
import { Header } from "."
import useMovies from "../hooks/useMovies"
import MainContainer from "./MainContainer"
import SearchResults from "./SearchResults"
import SecondaryContainer from "./SecondaryContainer"
import { useEffect } from "react"
import { resetSearch } from '../store/searchSlice';

const Browse = () => {
    const { loading, error } = useMovies();
    const searchValue = useSelector(store => store.search.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSearch())
    }, []);

    return (
        <div className="bg-neutral-900 min-h-screen">
            <Header />
            {loading && <p>Loading....</p>}
            {error && <p>Error: {error.message}</p>}
            {(!loading && !searchValue) && <>
                <MainContainer />
                <SecondaryContainer />
            </>}
            {searchValue && <SearchResults />}
        </div>
    )
}

export default Browse
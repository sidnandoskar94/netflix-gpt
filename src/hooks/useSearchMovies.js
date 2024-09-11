import { useState, useEffect } from 'react';
import movies from '../service/movies/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovieResults } from '../store/searchSlice';

const useSearchMovies = () => {
    const gptSuggestions = useSelector(store => store.search.result)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (gptSuggestions?.length === 0) { return }
        setLoading(true);
        async function fetchMovies() {
            try {
                const moviesOptions = await Promise.all(gptSuggestions.map(movie => movies.searchMovies(movie)));

                dispatch(updateMovieResults(moviesOptions));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [gptSuggestions]);

    return { loading, error };
};

export default useSearchMovies;
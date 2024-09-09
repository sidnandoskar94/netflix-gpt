import { useState, useEffect } from 'react';
import movies from '../service/movies/Movie';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../store/moviesSlice';

const useMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPopularMovies() {
            try {
                const response = await movies.getPopularMovies();
                dispatch(addPopularMovies(response))
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchPopularMovies();
    }, []);

    return { loading, error };
};

export default useMovies;
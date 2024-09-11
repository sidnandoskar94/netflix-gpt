import { useState, useEffect } from 'react';
import movies from '../service/movies/Movie';
import { useDispatch } from 'react-redux';
import { addMovies } from '../store/moviesSlice';

const useMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function fetchMovies() {
            try {
                const movieCategories = [
                    { type: 'nowPlaying', fetch: movies.getMovies() },
                    { type: 'popular', fetch: movies.getMovies('popular') },
                    { type: 'topRated', fetch: movies.getMovies('top_rated') },
                    { type: 'upcoming', fetch: movies.getMovies('upcoming') }
                ];

                const data = await Promise.all(movieCategories.map(category => category.fetch));

                data.forEach((movies, index) => {
                    dispatch(addMovies({ type: movieCategories[index].type, movies }));
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return { loading, error };
};

export default useMovies;
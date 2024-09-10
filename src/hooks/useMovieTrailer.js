import { useEffect, useState } from "react";
import movies from "../service/movies/Movie";


const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);

    const fetchMovieVideos = async (id) => {
        try {
            const movieVideosData = await movies.getMovieVideos(id);
            if (movieVideosData?.results?.length > 0) {
                const trailers = movieVideosData?.results?.filter((video) => video.type === "Trailer");
                const trailer = trailers?.length > 0 ? trailers[Math.floor(Math.random() * trailers.length)] : movieVideosData?.results[0];
                setTrailer(trailer)
            }


        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchMovieVideos(movieId);
    }, []);

    return { trailer };
}

export default useMovieTrailer
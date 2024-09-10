import VideoTitle from "./VideoTitle";
import VideoBanner from "./VideoBanner";
import { useSelector } from "react-redux";
import React from "react";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlaying);
    if (!movies) return null;

    let mainMovie = [];
    if (movies?.length > 0) {
        mainMovie = movies[Math.floor(Math.random() * movies?.length)];
    }

    return (
        <div className="relative overflow-hidden">
            <VideoBanner movieId={mainMovie?.id} />
            <VideoTitle className='absolute'
                title={mainMovie?.original_title}
                content={mainMovie.overview}
            />
        </div>
    )
}

export default React.memo(MainContainer);
import VideoTitle from "./VideoTitle";
import VideoBanner from "./VideoBanner";

const MainContainer = ({ movies }) => {
    if (!movies) return null;

    return (
        <div className="relative overflow-hidden">
            <VideoBanner movieId={movies?.id} />
            <VideoTitle className='absolute'
                title={movies?.original_title}
                content={movies.overview}
            />
        </div>
    )
}

export default MainContainer
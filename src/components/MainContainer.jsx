import VideoTitle from "./VideoTitle";
import VideoBanner from "./VideoBanner";

const MainContainer = ({ movies }) => {
    const mainMovie = movies?.length > 0 ? movies[0] : null;
    if (!mainMovie) return null;
    console.log('mainMovie', mainMovie);

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

export default MainContainer
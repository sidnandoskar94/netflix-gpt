import useMovieTrailer from "../hooks/useMovieTrailer";
import YouTube from "./YouTube";

const VideoBanner = ({ movieId }) => {
    const { trailer } = useMovieTrailer(movieId)
    return (
        <>
            {trailer && <div><YouTube videoId={trailer?.key} /></div>}
        </>
    )
}

export default VideoBanner;
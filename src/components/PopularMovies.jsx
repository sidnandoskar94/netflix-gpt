import { useSelector } from "react-redux";
import useMovies from "../hooks/useMovies"

const PopularMovies = () => {
    const { loading } = useMovies();
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    return (
        <div className="pt-20 px-6">
            {loading && <p>loading....</p>}
            {popularMovies?.length > 0 && <div className="">{
                popularMovies?.map((movie, index) => (
                    <div key={index} className="flex items-center mb-6">
                        <img className="w-16 h-16 object-cover rounded-full" src={movie.poster_path} alt={movie.title} />
                        <div className="ml-4">
                            <h2 className="text-lg font-medium">{movie.title}</h2>
                            <p className="text-sm">{movie.overview}</p>
                        </div>
                    </div>
                ))
            }</div>}
        </div>
    )
}

export default PopularMovies
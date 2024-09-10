import MovieList from "./MovieList";

const getCategoryTitle = (category) => {
    switch (category) {
        case 'popular':
            return 'Popular Movies';
        case 'upcoming':
            return 'Upcoming Movies';
        case 'topRated':
            return 'Top Rated Movies';
        case 'nowPlaying':
            return 'Now Playing';
        default:
            return category;
    }
}

const SecondaryContainer = ({ movies = {} }) => {
    return (
        <>
            {Object.entries(movies).map(([category, movieList]) => {
                const className = `now-playing relative mb-16 last:mb-0 ${category === 'nowPlaying' ? '-mt-52' : ''}`;
                return (
                    <MovieList
                        key={category}
                        className={className}
                        title={getCategoryTitle(category)}
                        movies={movieList}
                    />
                );
            })}
        </>
    );
};

export default SecondaryContainer;
import tmdbMovieService from './TMDBMovieService';

class Movies {
    constructor(movieService) {
        this.movieService = movieService;
    }

    getPopularMovies() {
        return this.movieService.getPopularMovies();
    }

    searchMovies(query) {
        return this.movieService.searchMovies(query);
    }

    getMovieDetails(movieId) {
        return this.movieService.getMovieDetails(movieId);
    }

    getMovieVideos(movieId) {
        return this.movieService.getMovieVideos(movieId);
    }
}
const movies = new Movies(tmdbMovieService);
export default movies;
import tmdbMovieService from './TMDBMovieService';

class Movies {
    constructor(movieService) {
        this.movieService = movieService;
    }

    getMovies(movieCategory = 'now_playing') {
        return this.movieService.getMovies(movieCategory);
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
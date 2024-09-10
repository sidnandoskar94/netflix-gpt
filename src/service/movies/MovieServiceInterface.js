export class MovieServiceInterface {
    async getMovies(movieCategory) {
        throw new Error("getPopularMovies method must be implemented");
    }

    async searchMovies(query) {
        throw new Error("searchMovies method must be implemented");
    }

    async getMovieDetails(movieId) {
        throw new Error("getMovieDetails method must be implemented");
    }

    async getMovieVideos(movieId) {
        throw new Error("getMovieVideos method must be implemented");
    }
}
import { MovieServiceInterface } from './MovieServiceInterface';
import { tmdb } from '../../config/tmdb';

class TMDBMovieService extends MovieServiceInterface {
    async getMovies(movieCategory) {
        try {
            const response = await tmdb.get(`/movie/${movieCategory}`, {
                params: {
                    language: 'en-US',
                    page: 1,
                    adult: true,
                },
            });
            return response.data.results;
        } catch (error) {
            console.error("TMDBService :: getMovies :: error", error);
            throw error;
        }
    }

    // Search for movies by keyword
    async searchMovies(query) {
        try {
            const response = await tmdb.get('/search/movie', {
                params: {
                    query,
                    language: 'en-US',
                    page: 1,
                    include_adult: false,
                },
            });
            return response.data.results;
        } catch (error) {
            console.error("TMDBService :: searchMovies :: error", error);
            throw error;
        }
    }

    async getMovieDetails(movieId) {
        try {
            const response = await tmdb.get(`/movie/${movieId}`, {
                params: {
                    language: 'en-US',
                },
            });
            return response.data;
        } catch (error) {
            console.error("TMDBService :: getMovieDetails :: error", error);
            throw error;
        }
    }

    async getMovieVideos(movieId) {
        try {
            const response = await tmdb.get(`/movie/${movieId}/videos`, {
                params: {
                    language: 'en-US',
                },
            });

            return response.data;
        } catch (error) {
            console.error("TMDBService :: getMovieDetails :: error", error);
            throw error;
        }
    }
}

const tmdbMovieService = new TMDBMovieService();
export default tmdbMovieService;
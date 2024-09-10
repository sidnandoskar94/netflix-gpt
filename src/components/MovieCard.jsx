import React from 'react'

const MovieCard = ({ movie }) => {
    const posterURL = movie?.poster_path ? `${String(import.meta.env.VITE_TMDB_POSTER_URL)}/${movie?.poster_path}` : `https://via.placeholder.com/200`;
    return (
        <div className='movie-card flex-grow-0 flex-shrink-0' title={movie?.title || 'Movie'}>
            <img className='w-56' src={posterURL} alt='Movie Poster' />
        </div>
    )
}

export default MovieCard
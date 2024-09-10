import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state[action.payload.type] = action.payload.movies;
        },
    }
});

export const { addMovies } = movies.actions;
export default movies.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularMovies: null
};

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
    }
});

export const { addPopularMovies } = movies.actions;
export default movies.reducer;
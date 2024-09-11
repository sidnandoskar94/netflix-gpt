import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: null,
    result: null,
    loading: true,
    movieResults: []
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch: (state, action) => {
            state.searchTerm = action.payload;
        },

        updateResult: (state, action) => {
            state.result = action.payload;
        },

        updateLoadingStatus: (state, action) => {
            state.loading = action.payload;
        },

        updateMovieResults: (state, action) => {
            state.movieResults = action.payload;
        },

        resetSearch: () => {
            return initialState;
        }
    }
});

export const { updateSearch, updateResult, updateLoadingStatus, updateMovieResults, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
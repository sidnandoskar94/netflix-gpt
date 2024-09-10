import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        search: searchSlice
    }
})

export default store;
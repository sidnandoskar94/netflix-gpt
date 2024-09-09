import axios from "axios";

const tmdb = axios.create({
    baseURL: String(import.meta.env.VITE_TMDB_BASEURL),
    params: {
        api_key: String(import.meta.env.VITE_TMDB_API_KEY),
    },
    timeout: 5000,
});

export { tmdb };
import { useSelector } from "react-redux"

const SearchResults = () => {
    const searchTerm = useSelector(store => store.search);
    return (
        <h2 className="pt-24 px-6 text-white text-2xl">Search Results For: {searchTerm}</h2>
    )
}

export default SearchResults
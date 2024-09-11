import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gpt from '../service/gpt/gpt';
import { updateSearch, updateResult, updateLoadingStatus } from '../store/searchSlice';

const SearchBox = () => {
    const { searchTerm } = useSelector(store => store.search);
    const searchInput = useRef(searchTerm);
    const [toggleSearch, setToggleSearch] = useState(false);
    const dispatch = useDispatch();

    const fetchSearch = async (searchQuery) => {
        dispatch(updateLoadingStatus(true));
        const gptResp = await gpt.getChatCompletion(searchQuery.trim());
        const movieList = gptResp?.choices[0].message?.content.split(",");
        console.log(movieList);
        dispatch(updateResult(movieList));
        dispatch(updateLoadingStatus(false));
    }

    const handleBtnClick = () => {
        setToggleSearch(prev => !prev)
        const searchQuery = searchInput?.current?.value;
        if (toggleSearch && searchQuery?.trim() !== '') {
            dispatch(updateSearch(searchQuery));
            fetchSearch(searchQuery);
        }
    }

    return (
        <div className='search-box relative rounded-sm overflow-hidden min-w-8 min-h-8'>
            {toggleSearch && <input
                className='search-box__input 
                    h-8 
                    p-[5px] 
                    pr-8 
                    font-normal 
                    text-sm 
                    bg-slate-950 
                    bg-opacity-65 
                    text-white 
                    border 
                    border-white'
                type='text'
                placeholder='Search...'
                ref={searchInput}
            />}
            <button
                className='search-box__btn 
                    absolute 
                    right-0 
                    h-full 
                    w-8'
                onClick={handleBtnClick}
            >
                <i className='icon-search' />
            </button>
        </div>
    )
}

export default React.memo(SearchBox);
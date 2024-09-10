import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../store/searchSlice';

const SearchBox = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const dispatch = useDispatch();
    const searchValue = useSelector(store => store.search);

    const handleBtnClick = () => {
        setToggleSearch(prev => !prev)
    }
    const handleSearchChange = (e) => {
        dispatch(updateSearch(e.target.value));
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
                value={searchValue || ''}
                onChange={handleSearchChange}
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
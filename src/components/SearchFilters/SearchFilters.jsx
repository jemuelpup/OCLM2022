//import SearchFilters from '.components/SearchFilters/SearchFilters';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './SearchFilters.scss';
import TextField from '@mui/material/TextField';

const SearchFilters = ({
    nameFilter,
    setNameFilter
}) => {
    return <div className='SearchFiltersContainer'>
        <TextField
        name="name-search"
        label="Publisher Name"
        variant="outlined"
        value={nameFilter}
        onChange={e => setNameFilter(e.target.value)}/>
    </div>
}

export default SearchFilters;
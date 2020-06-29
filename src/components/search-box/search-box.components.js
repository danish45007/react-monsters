import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({holder, handleChange}) => {
    return (
        <input 
        className='search' 
        type='search' 
        placeholder={holder} 
        onChange={handleChange} 
        />
    )    
}
import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';

const SearchForm = () => {
    return (
        <form action="" className="bg-gray-light radius-secondary py-[8px] px-[7px] duration-1000 my-2">
            <button className="text-gray-primary text-lg pl-1 pr-2" type="submit"><i className="bi bi-search"></i></button>
            <input id="search" className="border-none bg-transparent w-[250px] outline-none" type="text"
                placeholder="Nike 2021..." />
        </form>
    )
}

export default SearchForm
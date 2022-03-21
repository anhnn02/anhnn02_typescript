import React from 'react'
import Menu from './Menu';
import SearchForm from './SearchForm';
import ActionAuth from './ActionAuth';

const Header = () => {
    return (
        <>
            <header className="py-2 px-[30px]">
                <nav className="flex justify-between items-center">
                    <Menu />
                    <div className="flex justify-between items-center">
                        <SearchForm />
                        <ActionAuth />
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header
import React from 'react'
import { NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="">
                <NavLink to="/" className="">
                    <img className="w-[130px] pt-[16px] pb-5 px-[10px]" src="https://i.imgur.com/rKpDjIQ.png" alt="" /></NavLink>
            </div>
            <ul className="ml-10">
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Home</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/shop"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Shop</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/news"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">News</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/about"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">About</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/contact"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
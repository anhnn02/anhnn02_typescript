import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const ActionAuth = () => {
    return (
        <div className="flex justify-between items-center min-w-[120px] ml-5">
            <NavLink to=""
                className="bg-primary-15-color p-2 px-3 rounded-full trans-second hover:bg-primary-50-color"><i
                    className="bi bi-bell"></i></NavLink>
            <div className="relative">
                <button
                    className="">
                    <Link to="/cart" className="btn-cart-header bg-primary-15-color trans-second rounded-full py-[10px] px-3 hover:bg-primary-50-color">
                        <i className="bi bi-bag"></i>
                        <span className="absolute bg-primary-color w-[20px] rounded-full text-sm text-white -top-2 ">1</span>
                    </Link>
                </button>
            </div>
            <div className="container-account">
                {(localStorage.getItem('user')) ? <div className="">
                        <button id="logout">Logout</button>
                        <div className="dropdown-acc hidden">
                            <NavLink to="" className="dropdown-acc__item">Profile</NavLink>
                            <NavLink to="" className="dropdown-acc__item">Setting</NavLink>
                            <NavLink to="" className="dropdown-acc__item">Log out</NavLink>
                        </div>
                    </div>
                    : <div className="flex w-full">
                        <NavLink to="/signin" className="ml-[8px] trans-second hover:opacity-80">Sign In</NavLink>
                        <span className="ml-[8px] ">/</span>
                        <NavLink to="/signup" className="ml-[8px] trans-second hover:opacity-80">Sign Up</NavLink>
                    </div>}
            </div>
        </div>
    )
}

export default ActionAuth
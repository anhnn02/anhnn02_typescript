import React, { useState } from 'react'
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const ActionAuth = () => {
    const [openLogin, setOpenLogin] = useState(false)
    const navigate = useNavigate()
    const handleLogin = () => {
        if (!openLogin) {
            setOpenLogin(true)
        } else {
            setOpenLogin(false)
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        // navigate('/signin');
    }
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
                    <button className="my-2" onClick={handleLogin}><img className="w-10 h-10 object-cover bg-primary-15-color rounded-full hover:bg-primary-50-color" src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /></button>
                    
                    {openLogin && (
                        <div className="absolute shadow overflow-hidden color-[#fff] w-[220px] right-3 transition-all z-40 bg-white rounded-md">
                            <Link to="" className="block px-3 py-2 hover:bg-gray-100">Profile</Link>
                            <Link to="" className="block px-3 py-2 hover:bg-gray-100">Setting</Link>
                            <Link to="" onClick={() => {logout()}} className="block px-3 py-2 hover:bg-gray-100">Log out</Link>
                        </div>
                    )}

                    {/* <button id="logout">Logout</button>
                        <div className="dropdown-acc hidden">
                            <NavLink to="" className="dropdown-acc__item">Profile</NavLink>
                            <NavLink to="" className="dropdown-acc__item">Setting</NavLink>
                            <NavLink to="" className="dropdown-acc__item">Log out</NavLink>
                        </div> */}
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
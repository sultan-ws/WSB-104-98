import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../assests/Context';
import Cookies from 'js-cookie';


const Header = () => {

    const nav = useNavigate();

    const { ifAdminLoggedIn, setAdminLoggedIn } = useContext(myContext);

    const handleLogout = () => {

        Cookies.remove('admin-data');
        setAdminLoggedIn(false);
        nav('/');
    }
    return (
        <>
            <div className='flex items-center justify-between max-w-[1170px] m-auto'>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGaJBWP47e0EM72XgVqWg_B6HtSWOLw3jnA&s' className='w-[100px]' />
                </div>
                <div>
                    <ul className='flex'>

                        {
                            (ifAdminLoggedIn)
                                ?
                                (
                                    <li className='mx-1'>
                                        <button className='p-[8px_16px] rounded-lg bg-[olive] text-white border border-[olive] hover:bg-[white] hover:text-[olive]'
                                            onClick={handleLogout}>Logout</button>
                                    </li>
                                )
                                :
                                (<li className='mx-1'>
                                    <Link to='/login'>
                                        <button className='p-[8px_16px] rounded-lg bg-[olive] text-white border border-[olive] hover:bg-[white] hover:text-[olive]'>Login</button>
                                    </Link>
                                </li>)
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
// import { Layout } from 'react-router-dom';

const RouteLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            {/* <Layout /> */}
        </>
    )
}

export default RouteLayout
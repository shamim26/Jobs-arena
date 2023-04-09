import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container w-9/12 mx-auto'>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
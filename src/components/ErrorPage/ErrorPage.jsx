import React from 'react';
import errorImg from '../../assets/All-Images/error.jpg'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center my-8'>
            <img className='md:w-1/3 block mx-auto my-auto' src={errorImg} alt="" />
            <p className='italic text-gray-400'>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;
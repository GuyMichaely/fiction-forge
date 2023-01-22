import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SignInPage from './SignInPage';

export default function SignInLink() {
    const [dest, setDest] = useState('/signin')
    return (
        <Link 
            to={dest}
            className="flex flex-col items-center justify-center absolute top-4 left-4 h-12 w-80 px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={() => setDest(dest === '/' ? '/signin' : '/')}
        >
            <button type="button">Sign In/Register</button>
        </Link>
    )
}
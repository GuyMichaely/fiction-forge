import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function SignOutButton() {
    const [user, setUser] = useContext(UserContext);
    return (<button 
                type="button"
                className="flex flex-col items-center justify-center absolute top-4 left-4 h-12 w-80 px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={() => {console.log('signing out'); setUser('')}}
            >
                Sign Out
            </button>
    )
}
import React, { useContext } from 'react'
import SignOutButton from './SignOutButton'
import SignInForm from './SignInForm'
import SearchBar from './SearchBar'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const {user} = useContext(UserContext)
    return (
        <>
            <div className="w32 relative flex flex-col items-center justify-center">
                {user ? 
                    <div>
                        <SignOutButton />
                        <Link 
                            className="flex-col items-center justify-center absolute top-16 left-4 h-12 w-40 px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" to="/dashboard">
                            Dashboard
                        </Link>
                    </div> : 
                    <SignInForm />
                }
            </div>
            <div className="text-5xl font-bold text-center">Fiction Forge</div>
            <SearchBar />
        </>
    )
}
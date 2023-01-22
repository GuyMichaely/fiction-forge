import React, {useState} from 'react';
import SearchBar from './mainpage/SearchBar';
import SignInPage from './mainpage/SignInPage';
import { UserContext } from './UserContext'
import SignOutButton from './mainpage/SignOutButton'
import SignInLink from './mainpage/SignInLink';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  const [user, setUser] = useState('users');
  return <Router>
    <div className="relative h32 w32 h-screen flex flex-col items-center justify-center">
      <div className="flex">
        <UserContext.Provider value={[user, setUser]}>
          {/* <SignInLink/> */}
          {user ? <SignOutButton /> : <SignInLink />}
          <Routes>
            <Route path="/signout" element={<SignOutButton />} />
            <Route path="/signin" element={<SignInPage />} />
            {/* <Route element={<ProtectedRoutes/>}>
              
            </Route> */}
          </Routes>
        </UserContext.Provider>
      </div>
      <div>
        <div className="text-5xl font-bold text-center my-8">Fiction Forge</div>
        <SearchBar />
      </div>
    </div>
  </Router>
}

export default App;


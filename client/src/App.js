import React from 'react';
import SearchBar from './SearchBar';
import SignInPage from './SignInPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="relative h32 w32 h-screen flex flex-col items-center justify-center">
      <div className="flex">
        <button
          className="absolute top-4 left-4 h-12 w-80 px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="button"
        >
          <Link to="/signin">
            Sign In/Register
          </Link>
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </button>
      </div>
      <div>
        <div className="text-5xl font-bold text-center my-8">Fiction Forge</div>
        <SearchBar />
      </div>
    </div>
  </Router>
);

export default App;


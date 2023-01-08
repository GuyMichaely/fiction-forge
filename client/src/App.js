import React from 'react';
import SearchBar from './SearchBar';
const App = () => (
  <div className="relative h32 w32 h-screen flex flex-col items-center justify-center">
    <div className="flex">
      <button
        className="absolute top-4 right-4 h-12 w-24 px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        type="button"
      >
        <a href="/signin">
           Sign In
         </a>
      </button>
    </div>
    <div>
      <div className="text-5xl font-bold text-center my-8">Fiction Forge</div>
      <SearchBar />
    </div>
  </div>
);

export default App;


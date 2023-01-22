import React, { useState, useContext } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('Discover');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search here
  };

  return (
    <>
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <select
          className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Discover">Discover</option>
          <option value="Create">Create</option>
        </select>
        <div className="absolute right-0 top-0 mt-2 mr-2">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder={`${selectedOption === 'Discover' ? 'Discover Creations' : 'Forge a Masterpiece'}`}
      />
      <button
        type="submit"
        className="px-4 py-2 font-semibold leading-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
    </>
  );
};

export default SearchBar;

import React, { useState, useContext} from 'react';
import { UserContext } from '../UserContext';

export default function SignInPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const [user, setUser] = useContext(UserContext);

  function postData(endpoint, data) {
    // debugger;
    return fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.status === 200 ? setUser(data.username) : console.log(response.status, response.text()))
  }

  return (
    <form className="w-full mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <p>Your current user is {user}</p>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => postData('signin', {username, password})}
        >
          Sign In
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => postData('register', {username, password})}
        >
          Register
        </button>
      </div>
    </form>
  );
}
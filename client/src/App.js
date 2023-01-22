import React, {useState} from 'react';
import { UserContext } from './UserContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import DashBoard from './dashboard/DashBoard';

const App = () => {
  const [user, setUser] = useState('');
  fetch('/api/whoami').then(response => {
    if (response.status === 200) {
      response.text().then(setUser)
    }
  })
  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  )
}

export default App;


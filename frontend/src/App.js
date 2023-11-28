import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Course from './pages/Course/Course.jsx';
import User from './components/User/User.jsx';
import NotFound from './pages/NotFound/notfound.jsx';
import  Profile from './pages/Profile/Profile.jsx'

const App = () => {
  const [currUser, setCurrUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<User currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route path="/user" element={<User currUser={currUser} setCurrUser={setCurrUser} />} />
        <Route path='/course' element={<Course />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

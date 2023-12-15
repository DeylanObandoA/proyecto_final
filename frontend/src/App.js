import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import Course from './components/Course/Courses.jsx';
import User from './components/User/User.jsx';
import NotFound from './pages/NotFound/Notfound.jsx';
import Profile from './components/Profile/Profile.jsx';
import Home from './pages/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import CourseInfo from './components/CourseInfo/CourseInfo.jsx';
import CourseEdit from './components/CourseEdit/CourseEdit.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import CourseDelete from './components/CourseDelete/CourseDelete.jsx';
import CreateLocation from './components/CreateAddress/CreateAddress.jsx';
import CreateBranch from './components/CreateBranch/CreateBranch.jsx';
import InstitutionForm from './components/InstitutionForm/InstitutionForm.jsx';
import CreateCategory from './components/CreateCategory/CreateCategory.jsx';
import CreateCategoryCourse from './components/CreateCategoryCourse/CreateCategoryCourse.jsx';
import Spinner from './components/Spinner/Spinner.jsx';

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded.sub;
          const response = await fetch(
            `http://localhost:3001/api/v1/users/${userId}`
          );
          if (response.ok) {
            const data = await response.json();
            setCurrUser(data);
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, [setCurrUser]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={isLoading ? <Spinner /> : <User currUser={currUser} setCurrUser={setCurrUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-courses" element={<CreateCourse />} />
          <Route path="/course/:selectedId" element={<CourseInfo />} />
          <Route path="/edit-course/:selectedId" element={<CourseEdit />} />
          <Route path='/delete-course/:selectedId' element={<CourseDelete />} />
          <Route path="/edit-profile/:selectedId" element={<EditProfile />} />
          <Route path='/create-addresses' element={<CreateLocation />} />
          <Route path='/create-branches' element={<CreateBranch />} />
          <Route path='/institution-form' element={<InstitutionForm />} />
          <Route path='/create-categories' element={<CreateCategory />} />
          <Route path='/create-category-courses' element={<CreateCategoryCourse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

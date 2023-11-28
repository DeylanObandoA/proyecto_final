import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard.jsx";
import Navbar  from "../../components/Navbar/Navbar.jsx";
import "./Course.css"

const Course_url = "http://localhost:3001/api/v1/courses"

function Course(props) {
  const [course, setCourse] = useState([]);
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(Course_url);
      const json = await response.json();
      console.log(json);
      setCourse(json);
    }catch(error) {
      console.log("error",error)
    }
  };
  fetchData();
},[])
    return (
      <div>
      <Navbar>
      </Navbar>
      <div className="boss">
      <div className="courses">
      <CourseCard courses={course}></CourseCard>
      </div>
      </div>
      </div>
    );
  }

  export default Course
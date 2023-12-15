import React, { useEffect, useState } from "react";
import { getCourses } from '../../apis/CourseApi.jsx';
import { getCategoryCourses } from '../../apis/CategoryCourseApi.jsx';
import { fetchInstitutionName } from '../../apis/InstitutionsApi.jsx';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Sidebar from "../SideBard/Sidebard.jsx";
import CourseEdit from "../CourseEdit/CourseEdit.jsx";
import Spinner from "../Spinner/Spinner.jsx";
// import ButtonPag from "../ButtonPag/ButtonPag.jsx";
import CourseCard from "../CourseCard/CourseCard.jsx";
import "./Courses.css";

const Course = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [categoryCourse, setCategoryCourse] = useState([]);
  const [institutionName, setInstitutionName] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);   //manejar el estado de l apagina actual

  const handleCourseClick = (id) => {
    setSelectedId(id);
  };

  const handleCloseEditForm = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const coursesData = await getCourses(1);
        setCourses(coursesData || []);
      } catch (error) {
        console.error('Error al obtener cursos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryCourse = async () => {
      try {
        const categoryCourseData = await getCategoryCourses();
        setCategoryCourse(categoryCourseData);
      } catch (error) {
        console.error('Error al obtener las categorías en category_course:', error);
      }
    };

    fetchCategoryCourse();
  }, []);

  const normalizedText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Descomponer los caracteres diacríricos Eliminar caracteres diacríticos
  };

  const onSearch = () => {
    setLoading(true);
    const searchTerm = searchCourse.toLowerCase().trim();

    if (searchTerm === '') {
      setSearchResults(courses);
    } else {
      const filteredCourses = courses.filter(course => {
        const termName = normalizedText(course.name).toLowerCase().includes(searchTerm);
        const termDescription = normalizedText(course.description).toLowerCase().includes(searchTerm);

        return termName || termDescription;
      });
      setSearchResults(filteredCourses);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (searchCourse.trim() === '') {
      setSearchResults([]);
    } else {
      onSearch();
    }
  }, [searchCourse, courses]);

  useEffect(() => {
    if (selectedId) {
      const selectedCourse = courses.find(course => course.id === selectedId);
      if (selectedCourse) {
        const fetchInstitutionNameData = async (institutionId) => {
          try {
            const name = await fetchInstitutionName(institutionId);
            setInstitutionName(name.name); // Ajusta según tus datos reales
          } catch (error) {
            console.error('Error al obtener el nombre de la institución:', error);
          }
        };
        fetchInstitutionNameData(selectedCourse.institutionId); // Ajusta según tus datos reales
      }
    }
  }, [selectedId, courses]);


  return (
    <>
      <div className="boss">
        <Navbar onSearch={(term) => setSearchCourse(term)} />
        <div className="boxofcourses">
          <Sidebar className="barra" />
          <div className="main-content">
            <div className="course-cards-container">
                <div className="boxresults">
                  <CourseCard courses={searchResults} onCourseClick={handleCourseClick} />
                </div>
              <ul>
                {categoryCourse.map((category, index) => (
                  <li key={index}>{category.name}</li>
                ))}
              </ul>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <br />
                  <CourseCard courses={courses} onCourseClick={handleCourseClick} />
                </>
              )}
              <div>
                {selectedId && (
                  <>
                    <p>edi : {institutionName}</p>
                    <CourseEdit courseId={selectedId} onClose={handleCloseEditForm} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Course;

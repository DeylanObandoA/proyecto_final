import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';

const CreateCategoryCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [categoriesName, setCategoriesName] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

        const fetchData = async () => {
            try {
                const coursesResponse = await fetch(`${apiUrl}/api/v1/courses`);
                const categoriesResponse = await fetch(`${apiUrl}/api/v1/categories`);
                if (coursesResponse.ok && categoriesResponse.ok) {
                    const coursesData = await coursesResponse.json();
                    const categoriesData = await categoriesResponse.json();
                    setCourses(coursesData);
                    setCategories(categoriesData);
                } else {
                    console.error('Error al obtener la lista de cursos o categorías.');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'courseName') {
            setCourseName(value);
        } else if (name === 'categoriesName') {
            setCategoriesName(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        // Client-side validation
        if (!courseName.trim() || !categoriesName.trim()) {
            setErrorMessages(['Por favor, complete todos los campos.']);
            setLoading(false);
            return;
        }

        const selectedCourse = courses.find((course) => course.name === courseName);
        const course_id = selectedCourse ? selectedCourse.id : null;

        const selectedCategory = categories.find((category) => category.name === categoriesName);
        const category_id = selectedCategory ? selectedCategory.id : null;

        if (!course_id) {
            setErrorMessages(['Nombre de curso no válido. Por favor, elija un curso existente.']);
            setLoading(false);
            return;
        }

        const categoryCourseData = {
            category_id,
            course_id,
        };

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
            const response = await fetch(`${apiUrl}/api/v1/category_courses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category_course: categoryCourseData }),
            });

            if (response.ok) {
                alert('Category Course creado exitosamente');
            } else {
                if (response.status === 422) {
                    const errorData = await response.json();
                    console.log('Errores de validación:', errorData.error);
                    setErrorMessages(errorData.error);
                } else {
                    const errorText = await response.text();
                    console.error('Error al crear el Category Course. Detalles:', errorText);
                }
            }
        } catch (error) {
            console.error('Error de red:', error);
        }

        setCourseName('');
        setCategoriesName('');
        setLoading(false);
    };

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <form onSubmit={handleSubmit}>
                    <h2 className='instrutions-tittle'>Enlaza tu curso para mejor promocion y datos</h2>
                    <h2 className='instrutions-tittle'>Crear un Nueva Categoria del Curso </h2>
                    <div className='box-fromscourse'>
                        <div>
                            {errorMessages.length > 0 && (
                                <div style={{ color: 'red' }}>
                                    <p>Error al crear el curso:</p>
                                    <ul>
                                        {errorMessages.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}


                            <div className='formcourses' >
                                <label className='instrutions' htmlFor="courseName">Nombre del Curso:</label>
                                <input
                                    className='datacourse'
                                    type="text"
                                    id="courseName"
                                    name="courseName"
                                    value={courseName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions' htmlFor="categoriesName">Categoría:</label>
                                <input
                                    className='datacourse'
                                    type="text"
                                    id="categoriesName"
                                    name="categoriesName"
                                    value={categoriesName}
                                    onChange={handleChange}
                                />
                            </div>

                            <button className='createinfo-relations' type="submit" disabled={loading}>
                                {loading ? 'Cargando...' : 'Crear Category Course'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default CreateCategoryCourse;

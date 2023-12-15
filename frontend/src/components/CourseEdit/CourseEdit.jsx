import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import "./CourseEdit.css";

const CourseEdit = () => {
    const navigate = useNavigate();
    const { selectedId } = useParams();

    const [courseData, setCourseData] = useState({
        name: '',
        description: '',
        registration_day: '',
        institutionName: '',
        requirement: '',
        favorite: false,
    });

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                if (selectedId) {
                    const response = await fetch(`http://localhost:3001/api/v1/courses/${selectedId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setCourseData(data);
                    } else {
                        console.error('Error al obtener datos del curso');
                    }
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchCourseData();
    }, [selectedId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Convertir el nombre de la institución en su correspondiente ID
            const institutionName = courseData.institutionName;
            const institutionId = await fetchInstitutionIdByName(institutionName);

            const response = await fetch(`http://localhost:3001/api/v1/courses/${selectedId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course: { ...courseData, institution_id: institutionId } }),
            });

            if (response.ok) {
                alert("Curso actualizado exitosamente");
                navigate("/courses");
            } else {
                console.error('Error al actualizar el curso');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    // Función para obtener el ID de la institución por nombre
    const fetchInstitutionIdByName = async (institutionName) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/institutions?name=${institutionName}`);
            if (response.ok) {
                const data = await response.json();
                const institution = data[0]; // Suponiendo que solo obtienes una institución
                return institution.id;
            } else {
                console.error('Error al obtener el ID de la institución');
                return null;
            }
        } catch (error) {
            console.error('Error de red:', error);
            return null;
        }
    };

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <form onSubmit={handleSubmit}>
                    <h2 className='instructions-title'>Actualiza tu curso</h2>
                    <div className='box-form-course'>
                        <div className='form-courses'>
                            <label className='instructions' htmlFor="name">Nombre:</label>
                            <input className='data-course' type="text" id="name" name="name" value={courseData.name} onChange={handleChange} />
                        </div>

                        <div className='form-courses'>
                            <label className='instructions' htmlFor="description">Descripción:</label>
                            <input className='data-course' type="text" id="description" name="description" value={courseData.description} onChange={handleChange} />
                        </div>

                        <div className='form-courses'>
                            <label className='instructions' htmlFor="institutionName">Nombre de la Institución:</label>
                            <input className='data-course' type="text" id="institutionName" name="institutionName" value={courseData.institutionName} onChange={handleChange} />
                        </div>

                        <div className='form-courses'>
                            <label className='instructions' htmlFor="registration_day">Día de Matrícula:</label>
                            <input className='data-course' type="date" id="registration_day" name="registration_day" value={courseData.registration_day} onChange={handleChange} />
                        </div>

                        <div className='form-courses'>
                            <label className='instructions' htmlFor="requirement">Requerimientos:</label>
                            <input className='data-course' type="text" id="requirement" name="requirement" value={courseData.requirement} onChange={handleChange} />
                        </div>

                        <div className='form-courses'>
                            <label className='instructions' htmlFor="favorite">Favorito:</label>
                            <select className='data-course' id="favorite" name="favorite" value={courseData.favorite} onChange={handleChange}>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <button type="submit">Actualizar Curso</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default CourseEdit;

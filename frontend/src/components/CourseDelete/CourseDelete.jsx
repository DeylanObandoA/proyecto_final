import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDelete = ({ onClose }) => {
    const navigate = useNavigate();
    const { selectedId } = useParams();
    const [courseToDelete, setCourseToDelete] = useState([]);
    const [courseDeleted, setCourseDeleted] = useState(false);

    useEffect(() => {
        const fetchDataDelete = async () => {
            try {
                const url = `http://localhost:3001/api/v1/courses/${selectedId}`;
                const response = await fetch(url);
                const data = await response.json();
                setCourseToDelete(data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setCourseToDelete([]);
            }
        };

        fetchDataDelete();
    }, [selectedId]);

    const handleDelete = async () => {
        const confirmed = window.confirm('¿Seguro que deseas eliminar el curso?');

        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:3001/api/v1/courses/${selectedId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Curso eliminado exitosamente
                    alert('Curso eliminado exitosamente');
                    setCourseDeleted(true);
                    navigate("/courses")
                } else {
                    console.error('Error al eliminar el curso');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        }
    };

    // Puedes realizar acciones adicionales según el estado de courseDeleted
    useEffect(() => {
        if (courseDeleted) {
            // Puedes realizar acciones adicionales después de la eliminación
        }
    }, [courseDeleted]);

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <div>
                    <h2>Eliminar Curso</h2>
                    <p>¿Seguro que deseas eliminar el siguiente curso?</p>
                    <p>Nombre del Curso: {courseToDelete.name}</p>
                    {/* Muestra más información del curso según tus necesidades */}

                    <button onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                    </button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CourseDelete;

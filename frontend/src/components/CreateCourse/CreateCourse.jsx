import React, { useState, useEffect } from 'react';
import { getInstitutions } from '../../apis/InstitutionsApi.jsx';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import "./CreateCourse.css"
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [registrationDay, setRegistrationDay] = useState('');
    const [instiName, setInstiName] = useState('');
    const [requirement, setRequirement] = useState('');
    const [favorite, setFavorite] = useState(false);
    const [institutions, setInstitutions] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        const fetchInstitutions = async () => {
            try {
                const institutionsData = await getInstitutions();
                setInstitutions(institutionsData);
            } catch (error) {
                console.error('Error al obtener instituciones:', error);
            }
        };

        fetchInstitutions();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'registrationDay':
                setRegistrationDay(value);
                break;
            case 'instiName':
                setInstiName(value);
                break;
            case 'requirement':
                setRequirement(value);
                break;
            case 'favorite':
                setFavorite(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedInstitution = institutions.find(institution => institution.name === instiName);
        const institution_id = selectedInstitution ? selectedInstitution.id : null;

        if (!institution_id) {
            setErrorMessages(['Nombre de curso no válido. Por favor, elija una institución existente.']);
            return;
        }

        const courseData = {
            name,
            description,
            registration_day: registrationDay,
            institution_id,
            requirement,
            favorite,
        };

        try {
            const response = await fetch('http://localhost:3001/api/v1/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course: courseData }), 
            });

            if (response.ok) {
                alert('Curso creado exitosamente');
                navigate("/create-addresses");
            } else {
                if (response.status === 422) {
                    const errorData = await response.json();
                    console.log('Errores de validación:', errorData.error);
                    setErrorMessages(errorData.error);
                } else {
                    const errorText = await response.text();
                    console.error('Error al crear el curso. Detalles:', errorText);
                }
            }
        } catch (error) {
            console.error('Error de red:', error);
        }

        // Restaurar el estado después de enviar el formulario
        setName('');
        setDescription('');
        setRegistrationDay('');
        setInstiName('');
        setRequirement('');
        setFavorite(false);
    };

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <form onSubmit={handleSubmit}>
                    <h2 className='instrutions-tittle'>Crear un Nuevo Curso</h2>
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

                            <div className='formcourses'>
                                <label className='instrutions'>Nombre del Curso:</label>
                                <input className='datacourse' type="text" name="name" value={name} onChange={handleChange} placeholder='nombre del curso' />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions'>Descripcion del Curso:</label>
                                <input className='datacourse' type="text" name="description" value={description} onChange={handleChange} placeholder='Descripción del curso, informacion' />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions'>Dia de matricula:</label>
                                <input className='datacourse' type="date" name="registrationDay" value={registrationDay} onChange={handleChange} placeholder='dia de matricula' />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions'>Nombre de la Institucion:</label>
                                <input className='datacourse' type="text" name="instiName" value={instiName} onChange={handleChange} placeholder='nombre de la institucion' />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions'>Requisitos:</label>
                                <input className='datacourse' type="text" name="requirement" value={requirement} onChange={handleChange} placeholder='requerimientos ' />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions'>Favorito:</label>
                                <select type="text" name="favorite" value={favorite} onChange={handleChange}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>

                            <div className='move'>
                                <button className='createcourse' type="submit">Crear curso</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default CreateCourse;

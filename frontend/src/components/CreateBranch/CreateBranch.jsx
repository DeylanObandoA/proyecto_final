import React, { useState, useEffect } from 'react';
import { getCourses } from '../../apis/CourseApi.jsx';
import { getAddresses } from '../../apis/AddressesApi.jsx';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const CreateBranch = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [courses, setCourses] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesData = await getCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error al obtener cursos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const addressesData = await getAddresses();
                setAddresses(addressesData);
            } catch (error) {
                console.error('Error al obtener ubicaciones:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('Name:', name);
        console.log('Course Name:', courseName);
        console.log('Zip Code:', zipCode);
    }, [name, courseName, zipCode]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        let trimmedValue = value.trim(); // Elimina espacios al principio y al final

        if (name === 'zipCode') {
            // Elimina espacios en el medio
            trimmedValue = trimmedValue.replace(/\s/g, '');
        }

        switch (name) {
            case 'name':
                setName(trimmedValue);
                break;
            case 'courseName':
                setCourseName(trimmedValue);
                break;
            case 'zipCode':
                setZipCode(trimmedValue);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        console.log('Courses:', courses);
    }, [courses]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        console.log('Intentando enviar con zipCode:', zipCode);
        console.log('Courses in handleSubmit:', courses);

        const selectedCourse = courses.find(course => course.name === courseName);
        const course_id = selectedCourse ? selectedCourse.id : null;

        console.log('Selected course:', selectedCourse);
        console.log('Computed course_id:', course_id);

        const zipCodeAsNumber = Number(zipCode);
        const selectedLocation = addresses.find(address => address.zip_code === zipCodeAsNumber);
        const address_id = selectedLocation ? selectedLocation.id : null;

        console.log('Selected Location:', selectedLocation);
        console.log('Computed address_id:', address_id);

        if (!address_id) {
            setErrorMessages(['Código postal no válido. Por favor, ingrese un código postal válido.']);
            setIsSubmitting(false);
            return;
        }

        if (!course_id) {
            setErrorMessages(['Nombre de curso no válido. Por favor, elija un curso existente.']);
            setIsSubmitting(false);
            return;
        }

        const branchData = {
            name,
            course_id,
            address_id,
        };

        try {
            const response = await fetch('http://localhost:3001/api/v1/branches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ branch: branchData }),
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.data) {
                    // Hacer algo con los datos si es necesario
                }
                alert('Branch creado exitosamente');
                navigate("/create-category-course");
            } else {
                if (response.status === 422) {
                    const errorData = await response.json();
                    console.log('Errores de validación:', errorData.error);
                    setErrorMessages(errorData.error);
                } else {
                    const errorText = await response.text();
                    console.error('Error al crear el branch. Detalles:', errorText);
                }
            }
        } catch (error) {
            console.error('Error de red:', error);
        }

        setIsSubmitting(false);

        // Restaurar el estado después de enviar el formulario
        setName('');
        setCourseName('');
        setZipCode('');
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

                            <div className='formcourses' >
                                <label className='instrutions' htmlFor="name">Nombre del Branch:</label>
                                <input
                                    className='datacourse'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses'>
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

                            <div className='formcourses' >
                                <label className='instrutions' htmlFor="zipCode">Código Postal:</label>
                                <input
                                    className='datacourse'
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={zipCode}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='move'>
                                <button className='createinfo-relations' type="submit" disabled={isSubmitting}>Crear Branch</button>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
            <Footer />
        </>
    );
};

export default CreateBranch;
import React, { useState } from 'react';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const CreateAddresses = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        province: '',
        canton: '',
        district: '',
        neighborhood: '',
        zip_code: '',
    });

    const [errorMessages, setErrorMessages] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const addressData = {
            province: formData.province,
            canton: formData.canton,
            district: formData.district,
            neighborhood: formData.neighborhood,
            zip_code: formData.zip_code,
        };

        try {
            const response = await fetch('http://localhost:3001/api/v1/addresses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address: addressData }),
            });

            if (response.ok) {
                alert('Ubicación creada exitosamente');
                navigate("/create-branches");
            } else {
                if (response.status === 422) {
                    const errorData = await response.json();
                    console.log('Errores de validación:', errorData.error);
                    setErrorMessages(errorData.error);
                } else {
                    const errorText = await response.text();
                    console.error('Error al crear la ubicación. Detalles:', errorText);
                }
            }
        } catch (error) {
            console.error('Error de red:', error);
        }

        setFormData({
            province: '',
            canton: '',
            district: '',
            neighborhood: '',
            zip_code: '',
        });
    };

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <form onSubmit={handleSubmit}>
                    <h2 className='instrutions-tittle'>Crear un Nueva Sede</h2>
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
                                <label className='instrutions' htmlFor='province'>Province:</label>
                                <input
                                    className='datacourse'
                                    type='text'
                                    id='province'
                                    name='province'
                                    value={formData.province}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions' htmlFor='canton'>Canton:</label>
                                <input
                                    className='datacourse'
                                    type='text'
                                    id='canton'
                                    name='canton'
                                    value={formData.canton}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions' htmlFor='district'>District:</label>
                                <input
                                    className='datacourse'
                                    type='text'
                                    id='district'
                                    name='district'
                                    value={formData.district}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses' >
                                <label className='instrutions' htmlFor='neighborhood'>Neighborhood:</label>
                                <input
                                    className='datacourse'
                                    type='text'
                                    id='neighborhood'
                                    name='neighborhood'
                                    value={formData.neighborhood}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='formcourses'>
                                <label className='instrutions' htmlFor='zipCode'>Zip Code:</label>
                                <input
                                    type='text'
                                    className='datacourse'
                                    id='zip_code'
                                    name='zip_code'
                                    value={formData.zip_code}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='move'>
                                <button className='createinfo-relations' type='submit'>Crear Ubicación</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default CreateAddresses;

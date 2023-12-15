import React, { useState } from 'react';

const AddEntityForm = () => {
    const [courseData, setCourseData] = useState({
        name: '',
        requirement: '',
        description: '',
        subscription_date: '',
        institution_id: '',
        favorite: false,
    });
    const [addressData, setAddressData] = useState({
        province: '',
        canton: '',
        district: '',
        neighborhood: '',
    });
    // const [canton, setCanton] = useState('');
    // const [district, setDistrict] = useState('');
    // const [neighborhood, setNeighborhood] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCourseChange = (e) => setCourseData(e.target.value);
    const handleAdressDataChange = (e) => setAddressData(e.target.value);
    // const handleCantonChange = (e) => setCanton(e.target.value);
    // const handleDistrictChange = (e) => setDistrict(e.target.value);
    // const handleNeighborhoodChange = (e) => setNeighborhood(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos del curso:', courseData);
        console.log('Datos de la dirección:', addressData);


        if (!courseData || !addressData) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const courseResponse = await fetch('http://localhost:3001/api/v1/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ courseData }),
            });

            if (!courseResponse.ok) {
                throw new Error('Error al agregar el curso');
            }


            const courseData = await courseResponse.json();
            const courseId = courseData.id;

            const addressResponse = await fetch('http://localhost:3001/api/v1/addresses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ addressData }),
            });

            if (!addressResponse.ok) {
                throw new Error('Error al agregar la dirección');
            }

            const addressData = await addressResponse.json();
            const addressId = addressData.id;

            const branchResponse = await fetch('http://localhost:3001/api/v1/branches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ courses_id: courseId, address_id: addressId }),
            });

            if (!branchResponse.ok) {
                throw new Error('Error al agregar la sede');
            }

            // Resto de la lógica después de agregar todo con éxito
            // Por ejemplo, redirección o mensaje de éxito

        } catch (error) {
            setError(`Error al enviar datos al servidor: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <label htmlFor="courseName">Nombre del Curso:</label>
            <input
                type="text"
                id="courseName"
                name="name"
                value={courseData.name}
                onChange={handleCourseChange} />
            <br />
            <label htmlFor="courseName">Address:</label>
            <input
                type="text"
                id="courseName"
                name="name"
                value={addressData.province}
                onChange={handleAdressDataChange} />
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Submit'}
            </button>
        </form>
    );
};

export default AddEntityForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../SideBard/Sidebard';
import Footer from '../Footer/Footer';
import "./InstitutionForm.css";

const InstitutionForm = ({ onInstitutionSubmit }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        insti_type: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTypeChange = (selectedType) => {
        setFormData({ ...formData, insti_type: selectedType });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.insti_type) {
            newErrors.insti_type = 'Select an institution type';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            // Form is not valid, do not submit the request
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/v1/institutions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institution: {
                        name: formData.name,
                        insti_type: formData.insti_type,
                    },
                }),
            });

            if (response.ok) {
                alert("Institution created successfully");
                navigate("/create-course");
            } else {
                if (response.status === 422) {
                    const errorData = await response.json();
                    console.log('Validation errors:', errorData.error);
                    setErrors(errorData.error);
                } else {
                    const errorText = await response.text();
                    console.error('Error creating institution. Details:', errorText);
                }
            }
        } catch (error) {
            console.error('Network error:', error);
        }

        // Clear the form after successful submission or handle errors
        setFormData({
            name: '',
            insti_type: '',
        });

        // If a callback function is provided, call it with the institution data
        if (onInstitutionSubmit) {
            onInstitutionSubmit(formData);
        }
    };

    return (
        <>
            <div className='main-container'>
                <Sidebar />
                <form onSubmit={handleSubmit}>

                    <div className='formcourses'>
                        <label className='instrutions' htmlFor="name">Institution Name:</label>
                        <input
                            className='datacourse'
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className='formcourses'>
                        <label className='instrutions' htmlFor="type">Institution Type:</label>
                        <select
                            className='datacourse'
                            id="type"
                            name="type"
                            value={formData.insti_type}
                            onChange={(e) => handleTypeChange(e.target.value)}
                        >
                            <option value="">Select Type</option>
                            <option value="college">College</option>
                            <option value="university">University</option>
                            <option value="institute">Institute</option>
                        </select>
                        {errors.insti_type && <p className="error-message">{errors.insti_type}</p>}
                    </div>

                    <div className='move'>
                        <button className='createinfo-relations' type="submit">Add Institution</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default InstitutionForm;

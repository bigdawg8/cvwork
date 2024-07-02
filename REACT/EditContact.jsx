import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchContact();
    }, [id]); // Dodajte zavisnost na id kako bi se podaci osvežili kada se promeni id

    const fetchContact = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/contacts/${id}`);
            const { name, email } = response.data;
            setName(name);
            setEmail(email);
        } catch (error) {
            console.log('Error fetching contact', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/contacts/${id}`, { name, email });
            alert('Contact updated successfully');
            navigate('/'); // Redirect to contact list after update
        } catch (error) {
            console.log('Error updating contact', error);
        }
    };

    return (
        <div>
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditContact;

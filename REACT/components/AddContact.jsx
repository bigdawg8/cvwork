import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/contacts', { name, email });
            alert("Contact added successfully");
            navigate('/'); // preusmeravanje nazad na listu kontakta
        } catch (error) {
            console.log('Error adding contact', error);
        }
    };

    return (
        <div>
            <h1>Add New Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;

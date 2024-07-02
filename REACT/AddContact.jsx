import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please fill out both name and email fields.");
            return;
        }
        try {
            await axios.post('http://localhost:3001/contacts', { name, email });
            setName("");
            setEmail("");
            alert("Contact added successfully");
            navigate('/');
        } catch (error) {
            console.error("Error adding contact:", error);
            alert("Failed to add contact. Please try again later.");
        }
    };

    return (
        <div>
            <form onSubmit={submitData}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required /><br />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};
export default AddContact;

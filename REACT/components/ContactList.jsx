import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/contacts');
            setContacts(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <strong>{contact.name}</strong> - {contact.email}
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/add-contact')}>Add Contact</button>
        </div>
    );
};

export default ContactList;

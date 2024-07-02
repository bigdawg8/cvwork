import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const getDataFetch = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3001/contacts');
            setContacts(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDataFetch();
    }, []);

    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/contacts/${id}`);
            alert('Contact deleted successfully');
            // Refresh contact list after deletion
            getDataFetch();
        } catch (error) {
            console.error('Error deleting contact', error);
            alert('Failed to delete contact. Please try again later.');
        }
    };

    const handleEditContact = (id) => {
        navigate(`/editcontact/${id}`);
    };

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <div>
            <div className='contacts'>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <strong>{contact.name}</strong> - <strong>{contact.email}</strong>
                        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                        <button onClick={() => handleEditContact(contact.id)}>Edit</button>
                    </li>
                ))}
            </div>
            <button onClick={() => navigate('/addcontact')}>Add New Contact</button>
        </div>
    );
};

export default ContactList;

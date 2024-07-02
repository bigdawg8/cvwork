import React, { useEffect, useState } from 'react';

function Contacts() {
    // Contact list
    const [contacts, setContacts] = useState([]);
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Load contacts from localStorage when the component mounts
    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts');
        if (savedContacts) {
            setContacts(JSON.parse(savedContacts));
        }
    }, []);

    // Save contacts to localStorage whenever contacts change
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    // Validacija e-mail adrese
    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };

    // Add new contact
    const addNew = () => {
        if (contactName.trim() !== "" && contactEmail.trim() !== "" && isValidEmail(contactEmail)) {
            const newContact = { name: contactName, email: contactEmail };
            setContacts(prevContacts => ([...prevContacts, newContact]));
            setContactName("");
            setContactEmail("");
        } else {
            alert("Please enter a valid name and email.");
        }
    };

    const contactNameChange = (event) => {
        setContactName(event.target.value);
    };

    const contactEmailChange = (event) => {
        setContactEmail(event.target.value);
    };

    const deleteContact = (index) => {
        setContacts(prevContacts => prevContacts.filter((_, i) => i !== index));
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <h1>Contact List</h1>
            <button onClick={toggleFormVisibility} className='toggle-form-button'>
                {isFormVisible ? "Hide Form" : "Show Form"}
            </button>
            {isFormVisible && (
                <div className='add-contact'>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        type="text"
                        placeholder='Enter your name'
                        value={contactName}
                        onChange={contactNameChange}
                        className='input-field'
                    /><br />
                    <label htmlFor="email">Email</label><br />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={contactEmail}
                        onChange={contactEmailChange}
                        className='input-field'
                    /><br />
                    <button onClick={addNew} className='add-button'>Add Contact</button>
                </div>
            )}
            <ol>
                {contacts.map((contact, index) =>
                    <li key={index}>
                        <div className='name'>{contact.name}</div>
                        <div className='email'>{contact.email}</div>
                        <button onClick={() => deleteContact(index)} className='delete-button'>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Contacts;

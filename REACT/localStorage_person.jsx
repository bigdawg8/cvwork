import React, { useEffect, useState } from 'react';

const localStorage_person = () => {
    const [person, setPerson] = useState(() => {
        const savedPerson = localStorage.getItem('person');
        return savedPerson ? JSON.parse(savedPerson) : [];
    });
    const [personName, setPersonName] = useState("");
    const [personAge, setPersonAge] = useState("");
    const [personSex, setPersonSex] = useState("M");

    useEffect(() => {
        localStorage.setItem('person', JSON.stringify(person));
    }, [person]);

    // Add new person
    const addPerson = () => {
        if (personName && personAge && personSex) {
            const newPerson = { name: personName, age: personAge, sex: personSex };
            setPerson(p => [...p, newPerson]);
            setPersonName("");
            setPersonAge("");
            setPersonSex("M");
        }
    };

    return (
        <div className='container'>
            <div className='input'>
                <label htmlFor="name">Person's name:</label>
                <input 
                    type="text" 
                    value={personName} 
                    onChange={(e) => setPersonName(e.target.value)} 
                    required 
                /><br />
                <label htmlFor="age">Person's age:</label>
                <input 
                    type='number' 
                    value={personAge} 
                    onChange={(e) => setPersonAge(e.target.value)} 
                    required 
                /><br />
                <label htmlFor="sex">Person's sex:</label>
                <input 
                    type='text' 
                    value={personSex} 
                    onChange={(e) => setPersonSex(e.target.value)} 
                    required 
                /><br />
                <button onClick={addPerson}>Add</button>
            </div>
            <ol>
                {person.map((item, index) => (
                    <li key={index}>
                        {item.name} {item.age} {item.sex}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default localStorage_person;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function X() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    if(error){
        return <h1>Error fetching data: {error.message}</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }

    const deleteHandle = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`);
            alert("User deleted");
            fetchData();
        } catch (error) {
            alert("Error deleting user");
        }
    };

    const handleEdit = (id) => {
        navigate(`/z/${id}`);
    };

    return (
        <div className='container'>
            <button onClick={() => navigate('/y')}>Add User</button>
            <ol>
                {users.map(user => (
                    <li key={user.id}>
                        <span className='text'>{user.username} - {user.email} - {user.password}</span>
                        <button onClick={() => deleteHandle(user.id)}>Delete</button>
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

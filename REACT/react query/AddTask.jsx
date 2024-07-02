import React, { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate, isLoading, isError, isSuccess } = useMutation({
        mutationFn: (newTask) => axios.post('http://localhost:3001/tasks', newTask),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']); //re-fetch the data
            alert('Task added');
            navigate('/');
        },
        onError: () => {
            alert('Failed to add task. Please try again later.');
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            alert('Please enter a task name.');
            return;
        }
        mutate({ name });
    };
    // Prikazivanje različitih stanja u UI-ju
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return (
            <div>
                <h1>Error adding task. Please try again later.</h1>
                <button onClick={() => mutate({ name })}>Retry</button>
            </div>
        );
    }
    if (isSuccess) {
        return <h1>Task added</h1>;
    }
    return (
        <div>
            <h1>Add New Task</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Task Name:</label><br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    required
                /><br />
                <button type="submit" disabled={isLoading}>Add Task</button>
            </form>
        </div>
    );
}

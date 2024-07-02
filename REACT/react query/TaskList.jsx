import React from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
//todo list get and delete erq
export default function TaskList() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:3001/tasks');
        return response.data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axios.delete(`http://localhost:3001/tasks/${id}`),
        onSuccess: () => {
            alert("Task deleted");
            queryClient.invalidateQueries(['todos']); //re-fetch the data
        },
        onError: () => {
            alert("Error deleting task");
        }
    });

    if (error) {
        return <h1>Error fetching todos: {error.message}</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const deleteHandle = (id) => {
        deleteMutation.mutate(id);
    };

    return (
        <div>
            <button onClick={() => navigate('/x')}>Add Task</button>
            <ol>
                {data.map(task => (
                    <li key={task.id}>
                        <span className='text'>{task.name}</span>
                        <button onClick={() => deleteHandle(task.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

import React, { useState, useEffect } from 'react';

function LocalStorage() {
    // Todo List
    const [tasks, setTasks] = useState(() => {
        // Učitavanje zadataka iz localStorage prilikom inicijalizacije stanja
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newInput, setNewInput] = useState("");

    useEffect(() => {
        // Snimanje zadataka u localStorage svaki put kada se zadaci promene
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addNewTask = () => {
        if (newInput.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newInput]);
            setNewInput("");
        }
    }

    const removeTasks = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    const newInputChange = (event) => {
        setNewInput(event.target.value);
    }

    const moveUp = (index) => {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <div className='controls'>
                <input
                    type="text"
                    value={newInput}
                    onChange={newInputChange}
                    placeholder='Add task'
                />
                <button onClick={addNewTask} className='add-button'>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => removeTasks(index)}>delete</button>
                        <button className='up-button' onClick={() => moveUp(index)}>up</button>
                        <button className='down-button' onClick={() => moveDown(index)}>down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default LocalStorage;

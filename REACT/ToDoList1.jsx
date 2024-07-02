import React, { useState } from 'react';

function ToDoList1() { 
    //to do list
    const [chores,setChores] = useState([]);
    const [newChore,setNewChore] = useState("");

    const choreChange = (event) =>{
        setNewChore(event.target.value);
    }
    //add chore to the list
    const addChore = () =>{
        if(newChore.trim() != ""){
        setChores(prevChore => [...prevChore,newChore]);
        setNewChore("");
        }
    }
    const removeChore = (index) => {
        setChores(prevChore => prevChore.filter((_, i) => i !== index));
    }
    return (   
        <div>
            <h1>To-Do List</h1>
            <div className='flexx'>
            <input type="text" value={newChore} onChange={choreChange} placeholder='Add chores...'/>
            <button onClick={addChore} className='add-button'>Add</button>
            </div>
            <br />
            <ul>
            {chores.map((item,index) => <li key={index}>
               <span>{item}</span> 
                <button onClick={() =>removeChore(index)} className='remove-button'>Delete</button>
            </li>)}
                
            </ul>
        </div>
    );
}

export default ToDoList1

import React , { useState } from 'react'

function MyComponent2(){
    const [car,setCar] = useState({year:2020,make:"Lambo",model:"Urus",});
    function handleYearChange(event){
        setCar(prevCar => ({...prevCar,year:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(prevCar => ({...car,make:event.target.value}));   
    }
    function handleModelChange(event){
        setCar(prevCar => ({...car,model:event.target.value}));//updater function
    }
    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    );
}
export default MyComponent2
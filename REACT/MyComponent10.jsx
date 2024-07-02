import React,{useState,useEffect,useRef} from 'react'
function MyComponent10(){
    
    const inputRef = useRef(null);


    useEffect(() =>{
        console.log("COMPONENT RENDERED");
       
    
    });



    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
        <button onClick={handleClick}>click me</button>
        <input ref={inputRef}/>

        </div>
    );
}
export default MyComponent10
import React,{useState,useEffect} from 'react'
function MyComponent5(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () =>{ //cleanup

        }
    },[count,color]);


    function addCount(){
        setCount(prevCount => prevCount + 1);
    }
    function substractCount(){
        setCount(prevCount => prevCount - 1);
    }
    function changeColor(){
        setColor(prevColor => prevColor ==="green" ? "red":"green");
    }
    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button><br />
        <button onClick={changeColor}>Change Color</button>
        </>
    );
}
export default MyComponent5
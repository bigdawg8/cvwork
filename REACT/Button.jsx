
function Button(){
    const handleClick = (e) =>e.target.textContent = "Ouch!";
    return(
        <button onDoubleClick={(e) => handleClick(e)}>
            click me
        </button>
    );
}
export default Button
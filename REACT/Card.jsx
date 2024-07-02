import profilePic from './assets/space.jpg'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Dustin Poirier</h2>
            <p className='card-text'>I am champion and future HOF</p>
        </div>
    );
}
export default Card
import PropTypes from 'prop-types'
function CustomerGreeting(props){
    const cin = <h2>Welcome {props.username}</h2>
    const cout = <h2>Please log in to continue</h2>
    return(props.isLogged? cin:cout);
}
CustomerGreeting.propTypes = {
    username:PropTypes.string,
    isLogged:PropTypes.bool,
}
CustomerGreeting.defaultProps = {
    username:"Guest",
    isLogged:false,
}
export default CustomerGreeting
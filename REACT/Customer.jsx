import PropTypes from 'prop-types'
function Customer(props){
    const styles = {
        padding:"0px",
        border:"3px solid gray",
        boxShadow:"5px 5px 5px black",
    }
    return(
        <div className="customers" style={styles}>
            <p>Name: {props.name}</p>
            <p>Last name: {props.lname}</p>
            <p>Age: {props.age}</p>
            <p>Customer: {props.isCustomer ? "Yes":"No"}</p>
        </div>
    );
}
Customer.PropTypes = {
    name:PropTypes.string,
    lname:PropTypes.string,
    age:PropTypes.number,
    isCustomer:PropTypes.bool,
}
Customer.defaultProps = {
    name:"Guest",
    lname:"1",
    age:0,
    isCustomer:false,
}
export default Customer
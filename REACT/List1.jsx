import PropTypes from 'prop-types'
function List1(props){
    const automobiles = props.items;
    const category = props.category;
    const carsList = automobiles.map(auto =><li key={auto.id}>{auto.name} {auto.year}</li>);
    return(
        <>
        <h2 className="cars-category">{category}</h2>
        <ol>{carsList}</ol>
        </>
    );
}   
List1.propTypes = {
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,year:PropTypes.number}))
};
List1.defaultProps = {
    category:"Category",
    items:[],
}
export default List1
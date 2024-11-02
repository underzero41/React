import PropTypes from 'prop-types';

function List( {renderItem, items} ) {
    return ( 
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {renderItem(item, index)}
                </li>
            ))}
        </ul>
     );
}


List.propTypes = {
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};


export default List;
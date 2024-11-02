import React from 'react';
import PropTypes from 'prop-types';

const boxStyle = {
    border: '2px solid #007BFF',
    borderRadius: '5px',
    padding: '16px',
    margin: '16px 0',
    backgroundColor: '#f8f9fa',
};

const Box = ({ children }) => {
    return <div style={boxStyle}>{children}</div>;
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Box;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
function Button({ disabled, onClick, rounded, children }) {

    let round = rounded ? 'round' : '';
    return <button onClick={onClick} className={`btn ${round}`} disabled={disabled}>
        {children}
    </button>
}

Button.propTypes = {
    /**
     * on click button
     */
    onClick: PropTypes.func.isRequired,
    /**
     * to disable button
     */
    disabled: PropTypes.bool,
    /**
     * to make round corners
     */
    rounded: PropTypes.bool,
    /**
     * to give button text
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Button;

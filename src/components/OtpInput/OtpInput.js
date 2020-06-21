import React from 'react';
import PropTypes from 'prop-types';
import './OtpInput.css';

function OtpInput() {
    const [value, setValue] = React.useState("");

    const handleScroll = (e) => {
        e.target.scrollLeft = 0;
    }

    const onfocus = (e) => {
    }

    const onblur = (e) => {
    }

    return (
        <div className='input_wrapper'>
            <input
            type='number'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            onFocus={onfocus}
            onBlur={onblur}
            max='999999'
            min='0'
            onScroll={handleScroll}
            />
        </div>
    );
}

export default OtpInput;

OtpInput.propTypes = {
    /*
    *   Otp Input Field
    *   for 6 digits
    */
}

OtpInput.defaultProps = {

}
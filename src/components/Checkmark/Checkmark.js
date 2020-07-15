import React from 'react';
import "./Checkmark.css";
import { ReactComponent as Check } from '../../assets/svg/checkmark.svg'

function Checkmark(){
    return(
        <Check className='check' />
    )
}

export default Checkmark;
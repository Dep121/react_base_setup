import React from 'react';
import s from './WebPanel.module.scss';

function WebPanel({ top, left, bottom, right, children }) {
    
    return <div className={s.panel}>{ children }</div>
}

export default WebPanel;
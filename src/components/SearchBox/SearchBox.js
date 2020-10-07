import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBox.module.scss';

function SearchBox({ list, onSelect}) {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);

    const onInputChange = (e) => {
        const {target: {value}} = e;
        setSearchText(value);
        if(value === '') setSearchList([]);
        else setSearchList(list.filter(item=>item.toLowerCase().indexOf(value) > -1));
    }

    return <>
    <input type={'text'} value={searchText} onChange={onInputChange} />
    <ul>
        {
            searchList.map((item, i)=><li key={`${item}_${i}`}>{item}</li>)
        }
    </ul>
    </>
}

SearchBox.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func.isRequired
}

SearchBox.defaultProps = {
    list: ['deepak kumar pandey', 'Rajesh pandey', 'Guarav Singh', 'Vishal'],
}

export default SearchBox;
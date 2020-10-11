import React from 'react';
import s from './ListItem.module.scss';
import StarRating from '../StarRating/StarRating';

function ListItem({ heading, subHeading, logoName, logo, rating }) {
    return (
        <div className={s.listitem}>
            {
                logoName &&
                <div className={s.left}>
                    {/* {logo && <img src={logo} alt={logoName} />} */}
                    {logo}
                    <div>{logoName}</div>
                </div>
            }
            <div className={s.middle}>
                <h3>{heading}</h3>
                <h4>{subHeading}</h4>
            </div>
            <div className={s.right}>
                <StarRating rating={rating} />
            </div>
        </div>
    );
}

export default ListItem;
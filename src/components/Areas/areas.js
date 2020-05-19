import React from 'react';
import { Link } from 'react-router-dom';
import './areas.css';
import PropTypes from 'prop-types';

export const Areas = (props) => {
    return (
        <section className='area-card'>
            <h3>{props.name}</h3>
            <h3>Location: {props.locationName}</h3>
            <h3>{props.about}</h3>
            <Link to={`/areas/${props.id}/listings`}>
                <button className='view-listing-btn' id={props.id}>View Listings</button>
            </Link>
        </section>
    )
}


Areas.propTypes = {
    name:PropTypes.string,
    locationName:PropTypes.string,
    about: PropTypes.string,
    id: PropTypes.number
}
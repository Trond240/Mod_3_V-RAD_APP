import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/trondmakonese/mod_3/V-RAD/vrad-project/src/components/Areas/areas.css';

export const Areas = (props) => {
    console.log(props)
    return (
        <section className='area-card'>
            <h3>{props.name}</h3>
            <h3>Location: {props.locationName}</h3>
            <h3>{props.about}</h3>
            <Link to={`areas/${props.id}/listings`}>
                <button id={props.id}>View Listings</button>
            </Link>
        </section>
    )
}
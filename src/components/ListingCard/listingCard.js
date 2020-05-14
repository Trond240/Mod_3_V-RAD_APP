import React from 'react';
import { Link } from 'react-router-dom';


export const ListingCard = (props) => {
    return (
        <section className='listing-card'>
            <h2>{props.name}</h2>
            <Link to={`/areas/${props.areaId}/listings/${props.id}`}>
                <button id={props.id}>View Listing</button>
            </Link>
        </section>
    )
}
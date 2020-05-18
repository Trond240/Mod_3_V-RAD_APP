import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCrad.css'

export const ListingCard = (props) => {

    return (
        <section className='listing-card'>
            <h2>{props.name}</h2>
            <Link to={`/areas/${props.areaId}/listings/${props.id}`}>
                <button className='view-details-btn' id={props.id} >View Details</button>
            </Link>
        </section>
    )
}
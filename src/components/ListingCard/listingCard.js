import React from 'react';
import { Link } from 'react-router-dom';
import './listingCrad.css'
import PropTypes from 'prop-types';


export const ListingCard = (props) => {

    return (
        <section className='listing-card'>
            <h2 className="listing-card-title">{props.name}</h2>
            <img className="listing-img" src={`/images/${props.id}_a.jpg`} alt={`Images of ${props.steet}`} />
            <Link to={`/areas/${props.areaId}/listings/${props.id}`}>
                <button className='view-details-btn' id={props.id} >View Details</button>
            </Link>
        </section>
    )
}


ListingCard.propTypes = {
    name: PropTypes.string,
    areaId: PropTypes.number,
    id: PropTypes.number
}
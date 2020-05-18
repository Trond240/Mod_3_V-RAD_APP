import React from 'react';
import { Details } from '../DetailCard/DetailCard';
import PropTypes from 'prop-types';
import './listingDetails.css'

export const ListingDetails = (props) => {
    let allDetails;

    if (props.favorites.length ===0) {
        allDetails = <p>No Favorites Found</p>
    } else {
            allDetails = props.listings.map(listing => {
        return (
        <Details 
            key={listing.listing_id}
            area={listing.area}
            id={listing.listing_id}
            street={listing.address.street}
            zip={listing.address.zip}
            baths={listing.details.baths}
            beds={listing.details.beds}
            cost={listing.details.cost_per_night}
            features={listing.details.features}
            addToFavorites = {props.addToFavorites}
            favorites = {props.favorites}
            removeFromFavorites = {props.removeFromFavorites}
        />
        )
        })
    }
    return(
        <section className='listing-details-container'>
            {allDetails}
        </section>
    )
}


ListingDetails.propTypes = {
    listings: PropTypes.array,
}


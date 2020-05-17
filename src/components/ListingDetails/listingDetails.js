import React from 'react';
import { Details } from '../Detail-Information/DetailInformation';
import PropTypes from 'prop-types';
import './listingDetails.css'

export const ListingDetails = (props) => {

    
const allDetails = props.listings.map(listing => {
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
            />
        )
    })
    return(
        <section className='listing-details-container'>
            {allDetails}
        </section>
    )
}


ListingDetails.propTypes = {
    listings: PropTypes.array,
}


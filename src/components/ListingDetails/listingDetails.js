import React from 'react';
import { Details } from '../Detail-Information/detailInformation.js';


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
            />
        )
    })
    return(
        <section>
            {allDetails}
        </section>
    )
}
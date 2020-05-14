import React from 'react';
import { ListingCard } from '../ListingCard/listingCard.js'

export const ListingContainer = (props) => {
    console.log(props)

    const allListings = props.listings.map(listing => {
        console.log(listing)
        return(
            <ListingCard 
            key={listing.listing_id}
            id={listing.listing_id}
            areaId={listing.area_id}
            name={listing.name}     
            />
        )
    })

    return (
    <section>
        {allListings}
    </section>
    )
}


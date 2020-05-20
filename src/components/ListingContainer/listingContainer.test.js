import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListingContainer  } from './listingContainer'
import { BrowserRouter } from 'react-router-dom';



describe('Lisitng Container', () => {
    it('should Render Listings to the page', () => {

            const { getByText, getAllByText } = render(
            <BrowserRouter>
                <ListingContainer 
                    listings={[
                        {
                            "listing_id": 3,
                            "area_id": 590,
                            "name": "Hip RiNo Party Spot"
                        },
                        {
                            "listing_id": 4,
                            "area_id": 720,
                            "name": "My House"
                        }
                    ]}
                />
            </BrowserRouter>
        )

        const nameOneEl = getByText('Hip RiNo Party Spot');
        expect(nameOneEl).toBeInTheDocument(); 

        const nameTwoEl = getByText('My House');
        expect(nameTwoEl).toBeInTheDocument(); 
    });

});
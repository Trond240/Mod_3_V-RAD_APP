import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListingDetails } from './listingDetails'
import { BrowserRouter } from 'react-router-dom';



describe('Lisitng Container', () => {
    it('should Render Listings to the page', () => {

            const { getByText } = render(
            <BrowserRouter>
                <ListingDetails
                    favorites= {[]} 
                    listings={[
                        {
                            "listing_id": 3,
                            "area_id": 590,
                            "name": "Hip RiNo Party Spot",
                            "address": {
                                "street": "2250 Lawrence St",
                                "zip": 80205
                            },
                            "details": {
                                "neighborhood_id": 5124122,
                                "superhost": true,
                                "seller_source": "91jss1",
                                "beds": 3,
                                "baths": 2.5,
                                "cost_per_night": 420,
                                "features": [
                                    "hot tub",
                                    "espresso machine"
                                ]
                            }
                            
                        }
                    ]}
                />
            </BrowserRouter>
        )

        const addressEl = getByText('Street: 2250 Lawrence St');
        expect(addressEl).toBeInTheDocument(); 
        const zipEl = getByText('Zip: 80205')
        expect(zipEl).toBeInTheDocument(); 
    });
});
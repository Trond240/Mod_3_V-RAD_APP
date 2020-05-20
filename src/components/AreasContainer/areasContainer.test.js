import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AreasContainer } from './AreasContainer'
import { BrowserRouter } from 'react-router-dom';



describe('Areas Container', () => {
    it('Should render the Areas page', () => {

            const { getByText, getAllByText } = render(
            <BrowserRouter>
                <AreasContainer 
                    areaInfo={[
                        {about:"Sample Text", 
                        id:1, 
                        listings:["/api/v1/listings/3921", "/api/v1/listings/56"], 
                        location: 'Down town',
                        name: "Park Hill"},
                        {about:"Sample Text two", 
                        id:2, 
                        listings:["/api/v1/listings/3921", "/api/v1/listings/56"], 
                        location: 'Green Valley',
                        name: "Rhino"}
                    ]}
                />
            </BrowserRouter>
        )

        const nameEl = getByText('Park Hill');
        expect(nameEl).toBeInTheDocument(); 

        const locationEl = getByText('Location: Down town');
        expect(locationEl).toBeInTheDocument();

        const aboutEl = getByText('Sample Text');
        expect(aboutEl).toBeInTheDocument();
    });

});
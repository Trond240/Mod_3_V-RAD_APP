import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { ListingCard } from './ListingCard';
import { BrowserRouter } from 'react-router-dom';

describe('Areas', () => {
    it('Should render details card with correct text', () => {
        const { getByText } = render(
            <BrowserRouter>
            <ListingCard
                id={1}
                areaId={590}
                name={'Hip Hop Party House'} 
            /> 
            </BrowserRouter>
            )

        const nameElemenet = getByText('Hip Hop Party House')
        expect(nameElemenet).toBeInTheDocument()

        const viewBtn = getByText('View Details')
        expect(viewBtn).toBeInTheDocument()
    });
}); 
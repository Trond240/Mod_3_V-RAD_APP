import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, getByText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Details } from './DetailCard'

const mockFavoriting = jest.fn()

const renderDetailsCard = () => {
    return render(
        <Details 
            area = {'Rhino'} 
            street = {'123 Main Street'} 
            zip = {"80122"}
            beds = {1}
            baths ={2}
            cost = {123}
            features = {['bed', 'side table', 'cofee maker']}
            favorites = {[]}
            addToFavorites = {mockFavoriting}
            id = {1}
        />)
}

describe('Details Card', () => {
    it('Should render details card with correct text', () => {
        
        const { getByText } = renderDetailsCard()

        const areaElement = getByText("Rhino")
        expect(areaElement).toBeInTheDocument()
        
        const streetElement = getByText("Street: 123 Main Street")
        expect(streetElement).toBeInTheDocument()

        const zipElement = getByText("Zip: 80122")
        expect(zipElement).toBeInTheDocument()

        const bedsElement = getByText("Number of Beds: 1")
        expect(bedsElement).toBeInTheDocument()

        const bathsElement = getByText("Number of bath: 2")
        expect(bathsElement).toBeInTheDocument()

        const costElement = getByText("Cost per night: $123")
        expect(costElement).toBeInTheDocument()

        const featuresElement = getByText("bed")
        expect(featuresElement).toBeInTheDocument()
    });

    it('Should perform favoriting function on click of the button', () => {
       
        
        const { getByText } = renderDetailsCard()

        const favBtn = getByText("Favorite")
        expect(favBtn).toBeInTheDocument()

        fireEvent.click(getByText("Favorite"))
        expect(mockFavoriting).toHaveBeenCalledWith(1)
    });


    
});
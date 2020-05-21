import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, getByText, fireEvent, debug, container } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Areas } from './Areas';
import { BrowserRouter } from 'react-router-dom';

describe('Areas', () => {
    it('Should render details card with correct text', () => {
        const { getByText } = render(
            <BrowserRouter>
            <Areas 
            name ={'Fake Name'}
            locationName = {'Fake Location'}
            about = {'Fake stuff here'}
            id = {1}
            /> 
            </BrowserRouter>
            )
        const nameElemenet = getByText('Fake Name')
        expect(nameElemenet).toBeInTheDocument()
        const locationName = getByText("Location: Fake Location")
        expect(locationName).toBeInTheDocument()
        const aboutElement = getByText("Fake stuff here")
        expect(aboutElement).toBeInTheDocument()
    });
    
  
}); 

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
    it('should Render Listings to the page', () => {

            const { getByText } = render(
                <BrowserRouter>
                <NavBar  
                    favorites={[]}
                    user={{name: 'Trond', email: 'trondation@gamil.com', reason: 'busisness'}} 
                />
                </BrowserRouter>
        )

        const emailEl = getByText('trondation@gamil.com')
        expect(emailEl).toBeInTheDocument(); 

        const favoritesBtn = getByText('0 No Favorites')
        expect(favoritesBtn).toBeInTheDocument(); 

        const areasBtn = getByText('Areas')
        expect(areasBtn).toBeInTheDocument(); 


        const logOutBtn = getByText('Log Out')
        expect(logOutBtn).toBeInTheDocument(); 

    });
});
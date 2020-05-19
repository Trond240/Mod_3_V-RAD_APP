import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';



describe('Details Card', () => {
    it('Should render the login page', () => {
        const { getByText, getByPlaceholderText } = render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
            )

            const nameEl = getByPlaceholderText('name')
            expect(nameEl).toBeInTheDocument();

            const emailEl = getByPlaceholderText('email')
            expect(emailEl).toBeInTheDocument();

            const reasonEl = getByText('Reason for visit')
            expect(reasonEl).toBeInTheDocument();

            const loginBtn = getByText('Login')
            expect(loginBtn).toBeInTheDocument();
    });

    it.skip('Should login the user with the correct information', () => {

    });

});
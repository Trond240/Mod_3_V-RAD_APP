import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';



describe('Login Page', () => {
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

    it('Should login the user with the correct information', () => {
        const mockLoginUser = jest.fn()
        const { getByText, getByPlaceholderText, debug, getByTestId } = render(
            <BrowserRouter>
                <LoginPage
                setUserInfo={mockLoginUser} 
                />
            </BrowserRouter>
            )
            
            const loginBtn = getByText('Login')
            expect(loginBtn).toBeInTheDocument();

            fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
            fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gamil.com'}});
            fireEvent.change(getByTestId('dropdown'), {target: {value: 'business'}})
            fireEvent.click(getByText('Login'));  

            expect(mockLoginUser).toHaveBeenCalledTimes(1)
            expect(mockLoginUser).toHaveBeenCalledWith({name: 'Trond', email: 'trondation@gamil.com', reason: 'business'})
        });
    });
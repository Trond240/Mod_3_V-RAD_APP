import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getAreas } from './apiCalls'

// jest.mock('./apiCalls')

describe('App', () => {
  
  it('Should have a log in page on load', () => {
    const { getByText } = render(
    <BrowserRouter>
    <App />)
    </BrowserRouter>)

    const logIn =  getByText("Rad Rentals!")
    expect(logIn).toBeInTheDocument()
    const submitBtn = getByText("Login")
    expect(submitBtn).toBeInTheDocument()
  });

  // it('Should render areas after login', async () => {
  //   getAreas.mockResolvedValueOnce([
  //     {about:"Sample Text", 
  //     id:"1", 
  //     listingList:["/api/v1/listings/3921", "/api/v1/listings/56"], 
  //     name: "Park Hill"},
  //     {about:"Sample Text two", 
  //     id:"2", 
  //     listingList:["/api/v1/listings/3921", "/api/v1/listings/56"], 
  //     name: "Rhino"}])
    
  //     const { getByText } = render(
  //     <BrowserRouter>
  //     <App />)
  //     </BrowserRouter>)

  // });





});





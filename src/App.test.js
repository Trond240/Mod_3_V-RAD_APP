import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { getAreas, getAreasListings } from './apiCalls';
import { BrowserRouter } from 'react-router-dom';



jest.mock('./apiCalls')

const areasMock = [{
  "id": 590,
  "name": "River North",
  "location": "North of Downtown Denver",
  "about": "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
  "region_code": 6356834,
  "quick_search": "o5kod9f5cqo0",
  "listings": [
      "/api/v1/listings/3",
  ]
}]

const listingMock = {
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
  },
  "dev_id": "u4gh2j",
  "area": "rino",
  "db_connect": 834470
}


const renderApp = () => {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )
}

describe('App', () => {

  getAreas.mockResolvedValue(areasMock)
  getAreasListings.mockResolvedValue(listingMock)
  
  it('Should have a log in page on load', () => {
    const { getByText } = renderApp()
  
    const logIn =  getByText("Rad Rentals!")
    expect(logIn).toBeInTheDocument()
    const submitBtn = getByText("Login")
    expect(submitBtn).toBeInTheDocument()
  });

  describe ("Login integration", () => {

    it('As a user after form is filled out and submitted I should be logged in', () => {
      
      const { getByText, getByPlaceholderText, getByTestId } = renderApp()
      
      fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
      fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gamil.com'}});
      fireEvent.change(getByTestId('dropdown'), {target: {value: 'business'}})
      fireEvent.click(getByText('Login'));  

      const email = getByText('trondation@gamil.com')

      expect(email).toBeInTheDocument()

    });

  })

  describe ("Areas Container Integration", () => {   
      it('As a logged in user I should see a list of areas', async () => {
        
        const { getByText, getByPlaceholderText, getByTestId, debug} = renderApp()
        
        fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
        fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gamil.com'}});
        fireEvent.change(getByTestId('dropdown'), {target: {value: 'business'}})
        fireEvent.click(getByText('Login')); 


        const area = await waitFor( () => getByText("River North")) 

        expect(area).toBeInTheDocument()

    });



  })

  it('Should render all lisitngs when the view listings button is clicked', async () => {

        const { getByText, getByPlaceholderText, getByTestId, debug} = renderApp()

        fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
        fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gamil.com'}});
        fireEvent.change(getByTestId('dropdown'), {target: {value: 'business'}})
        fireEvent.click(getByText('Login')); 


        const area = await waitFor( () => getByText("River North")) 

        expect(area).toBeInTheDocument()
        
        fireEvent.click(getByText('View Listings')); 

        const listing = await waitFor( () => getByText("Hip RiNo Party Spot")) 
        expect(listing).toBeInTheDocument()
  });


  it('Should render lisitng detials when the view details button is clicked', async () => {

    const { getByText, getByPlaceholderText, getByTestId, debug} = renderApp()

    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
    fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gamil.com'}});
    fireEvent.change(getByTestId('dropdown'), {target: {value: 'business'}})
    fireEvent.click(getByText('Login')); 


    const area = await waitFor( () => getByText("River North")) 
    expect(area).toBeInTheDocument()
    
    fireEvent.click(getByText('View Listings')); 

    const listingName = await waitFor( () => getByText("Hip RiNo Party Spot")) 
    expect(listingName).toBeInTheDocument()

    fireEvent.click(getByText('View Details')); 

    const detailsName = await waitFor( () => getByText("rino")) 
    expect(detailsName).toBeInTheDocument()

});
});





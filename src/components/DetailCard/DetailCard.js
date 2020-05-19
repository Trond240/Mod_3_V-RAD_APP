import React from 'react';
import PropTypes from 'prop-types';
import './detailCard.css'

export const Details = (props) => {
    console.log(props)
    let favorites = props.favorites; 
    
    let favoriteOrUnfavoriteBtn;


    if(favorites.includes(props.id)) {
        favoriteOrUnfavoriteBtn = <button className='fav-btn' id={props.id} onClick={() => props.removeFromFavorites(props.id)}>Unfavorite</button> 
    } else {
        favoriteOrUnfavoriteBtn = <button className='fav-btn' id={props.id} onClick={() => props.addToFavorites(props.id)}>Favorite</button>
    }

    const allFeatures = props.features.map(function (feature, index) {
        return (
        <li key ={index}>{feature}</li>
        )
    })
    return(
        
        <section className='detail-card'>
            <h1>{props.area}</h1>
            <p>Street: {props.street}</p>
            <p>Zip: {props.zip}</p>
            <p>Number of Beds: {props.beds}</p>
            <p>Number of bath: {props.baths}</p>
            <p>Cost per night: ${props.cost}</p>
            <h2>Speacial Features:</h2>
            <ul>{allFeatures}</ul>
            {favoriteOrUnfavoriteBtn}
        </section>
    )
}

Details.propTypes = {
    area: PropTypes.string,
    street: PropTypes.string,
    zip: PropTypes.string,
    beds: PropTypes.number,
    baths: PropTypes.number,
    cost: PropTypes.number,
    features: PropTypes.array,
    removeFromFavorites: PropTypes.func,
    addToFavorites:PropTypes.func
}
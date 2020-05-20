import React from 'react';
import PropTypes from 'prop-types';
import './detailCard.css'

export const Details = (props) => {

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
            <div className="image-container">
                <img className="property-img" src={`/images/${props.id}_a.jpg`} alt={`Images of ${props.steet}`} />
                <img className="property-img" src={`/images/${props.id}_b.jpg`} alt={`Images of ${props.steet}`} />
                <img className="property-img" src={`/images/${props.id}_c.jpg`} alt={`Images of ${props.steet}`} />
            </div>
            <h1 className="area-name-title">{props.area}</h1>
            <ul className="details-list">
                <li>Street: {props.street}</li>
                <li>Zip: {props.zip}</li>
                <li>Number of Beds: {props.beds}</li>
                <li>Number of bath: {props.baths}</li>
                <li>Cost per night: ${props.cost}</li>
            </ul>
            <h2>Speacial Features:</h2>
            <ul>{allFeatures}</ul>
            {favoriteOrUnfavoriteBtn}
        </section>
    )
}

Details.propTypes = {
    area: PropTypes.string,
    street: PropTypes.string,
    zip: PropTypes.number,
    beds: PropTypes.number,
    baths: PropTypes.number,
    cost: PropTypes.number,
    features: PropTypes.array,
    removeFromFavorites: PropTypes.func,
    addToFavorites:PropTypes.func
}
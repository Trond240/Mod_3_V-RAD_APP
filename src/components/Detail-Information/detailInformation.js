import React from 'react';

export const Details = (props) => {
    console.log(props)
    const allFeatures = props.features.map(feature => {
        return (
        <li>{feature}</li>
        )
    })
    return(
        <section>
            <h1>{props.area}</h1>
            <p>Street: {props.street}</p>
            <p>Zip: {props.zip}</p>
            <p>Number of Beds: {props.beds}</p>
            <p>Number of bath: {props.baths}</p>
            <p>Cost per night: {props.baths}</p>
            <h2>Speacial Features:</h2>
            <ul>{allFeatures}</ul>
            <button id={props.id}>Favorite</button>
        </section>
    )
}
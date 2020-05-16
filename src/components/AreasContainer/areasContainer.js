import React from 'react';
import { Areas } from '../Areas/Areas';
import './areasContainer.css'

export const AreasContainer = (props) => {
    const allAreaInfo = props.areaInfo.map(area => {
        return (
            <Areas 
                key={area.id}
                id={area.id}
                name={area.name}
                locationName={area.location}  
                about={area.about}
                listingList={area.listings}
            />
        )
    })

    return (
    <section className='areas-container'>
        {allAreaInfo}
    </section>
    )
}

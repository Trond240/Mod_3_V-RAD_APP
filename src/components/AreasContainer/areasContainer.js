import React from 'react';
import { Areas } from '/Users/trondmakonese/mod_3/V-RAD/vrad-project/src/components/Areas/areas.js';
import './areasContainer.css'
import PropTypes from 'prop-types';

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

AreasContainer.propTypes = {
    areaInfo: PropTypes.array
}
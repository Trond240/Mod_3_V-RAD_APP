import React from 'react';
import { Areas } from '/Users/trondmakonese/mod_3/V-RAD/vrad-project/src/components/Areas/areas.js';

export const AreasContainer = (props) => {
    console.log(props)
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
    <section>
        {allAreaInfo}
    </section>
    )
}

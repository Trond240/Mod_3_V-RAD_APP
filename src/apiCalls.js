export const getAreas = () => {
    return fetch('https://vrad-api.herokuapp.com/api/v1/areas')
    .then(res => res.json())
    .then(data => {
        const areaDetails = data.areas.map(area => {
        return fetch(`https://vrad-api.herokuapp.com${area.details}`)
        .then(res => res.json())
        .then(area => {
            return {
                name: area.name,
                ...area
            }
        })
        })
        return Promise.all(areaDetails)
    })
    .catch(err => console.log(err));
}

export const getAreasListings = (listing) => {
    return fetch(`http://localhost:3001${listing}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}



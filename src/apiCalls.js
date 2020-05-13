export const getAreas = () => {
    return fetch('http://localhost:3001/api/v1/areas')
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const getAreasListings = (listing) => {
    return fetch(`http://localhost:3001${listing}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
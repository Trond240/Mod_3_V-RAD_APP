export const getAreas = () => {
    return fetch('http://localhost:3001/api/v1/areas')
    .then(res => res.json())
    .catch(err => console.log(err))
}

// export const getAreaDetails = (data) => {
//     return fetch(`http://localhost:3001${area.details}`)
//     .then(res => res.json())
// }


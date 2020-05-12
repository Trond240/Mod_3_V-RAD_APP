export const getAreas = () => {
    return fetch('https://vrad-api.herokuapp.com/api/v1/areas')
    .then(res => res.json())
    .catch(err => console.log(err))
}

// export const getAreaDetails = (data) => {
// const areaDetails = data.areas.map(area => {
//         return fetch(`https://vrad-api.herokuapp.com/${area.details}`)
//         .then(res => res.json())
//         .then(area => {
//             return {
//             name: area.name,
//             ...area
//             }
//         })
// })
// }

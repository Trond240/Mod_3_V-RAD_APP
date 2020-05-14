import React, { Component } from 'react';

export const ListingContainer = (props) => {
    const allListings = props.listingByArea.map(area => {
        return area.listings.map(listing => {
            return props.getListings(listing)
        })
    })

    return (
    <section>
        <h1>Made-it</h1>
    </section>
    )
}


// export default class ListingContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             listings: []
//         }
//     }

//     render(props) {
//         console.log(this.props)
//         return (
//         <section>
//             {allListings}
//         </section>
//         )
//     }
// }
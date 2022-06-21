import React from 'react'
import {Link} from "react-router-dom"

const Reservation = ({reservation}) => {
    console.log(reservation)
    return(
    <div className="reservation">
        <img src={reservation.images_of_house_booked[0].img}/>
        <p>Price: ${reservation.price}</p>
        <p>Date of Arrive: {reservation.start_date}</p>
        <p>Date for leaving: {reservation.end_date}</p>
    </div>
    )
}

export default Reservation
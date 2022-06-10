import React from "react"

const HomeCard = ({home}) =>{
    const {title, price,images} = home

    return(
    <div className="home-item">
        <img src={images[0].img} className="home-img"/>
        <p className="home-text">{title}</p>
        <p className="home-text">Price: ${price}</p>
    </div>)
}

export default HomeCard
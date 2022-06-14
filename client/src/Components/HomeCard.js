import React from "react"
import {Link} from "react-router-dom"
const HomeCard = ({home}) =>{
    const {title, price,images,id} = home    
    return(
    <div className="home-item">
        <Link to={`home/${id}`}>
          <img src={images[0].img} className="home-img"/>
          <p className="home-text">{title}</p>
          <p className="home-text">Price: ${price}</p>
        </Link>
    </div>)
}

export default HomeCard
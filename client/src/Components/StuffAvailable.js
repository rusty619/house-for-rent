import React from 'react';

const StuffAvilable = ({homeData}) => {
    return(
    <div className="stuff-available">
        <p className="stuff-available-place">What's available in this place</p>
        <div className="stuff-available-wifi">
            <i class="fa-solid fa-wifi"></i> 
            <p className="stuff-avilable-wifi-text">Wifi: </p>
            <p className="stuff-avilable-wifi-text-boolean">{homeData.has_internet ? "yes" : "no"}</p>
        </div>
        <div className="stuff-available-tv">
            <i class="fa-solid fa-tv"></i>
            <p className="stuff-avilable-tv-text">TV: </p>
            <p className="stuff-avilable-tv-text-boolean">{homeData.has_tv ? "yes" : "no"}</p>
        </div>
        <div className="stuff-available-kitchen">
            <i class="fa-solid fa-kitchen-set"></i>
            <p className="stuff-avilable-kitchen-text">Kitchen: </p>
            <p className="stuff-avilable-kitchen-text-boolean">{homeData.has_kitchen ? "yes" : "no"}</p>
        </div>
        <div className='stuff-available-ac'>
            <i class="fa-solid fa-snowflake"></i>
            <p className='stuff-available-ac-text'>Air Conditioner: </p>
            <p className='stuff-available-ac-text-boolean'>{homeData.has_air_con ? "yes" : "no"}</p>
        </div>
    </div>)
}

export default StuffAvilable;
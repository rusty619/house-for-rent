import React from 'react'

const SleepArea = ({homeData}) => {

    return(
    <div className='sleep-area'>
        <p className="sleep-area-text">Where you'll sleep</p>
        <div className="sleep-area-container-img">
            { homeData.images && homeData.images.map((image) => {
                if( image.room_type === 'bedroom'){
                    return(
                         <div><img src={image.img} className="sleep-area-img"/></div>
                    )
                }
            })}
        </div>
    </div>)
}

export default SleepArea;
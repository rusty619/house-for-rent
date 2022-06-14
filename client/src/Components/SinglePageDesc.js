import React from 'react'

const SinglePageDesc = ({homeData}) => {
    console.log(homeData)
    return(
    <div className= "single-page-desc">
        {homeData.summary}
    </div>
    )
}

export default SinglePageDesc;
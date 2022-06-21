import HomeCard from "./HomeCard"
import React from 'react'
import ReactLoading from 'react-loading'

function HomeContainer({homeData, loading}){
    return(
    <div className="home-container">
        {!loading ? (
          <ReactLoading
          type={"spinningBubbles"}
          color={"#0000FE"}
          height={'50%'}
          width={'50%'}
          className="now-loading"
          />) : homeData.map((home) => {
                return(
                    <HomeCard key={home.id} home={home}/>
                )
            })
          
        }
    </div>)
}

export default HomeContainer
import HomeCard from "./HomeCard"

function HomeContainer({homeData}){
    return(
    <div className="home-container">
        {
            homeData.map((home) => {
                return(
                    <HomeCard key={home.id} home={home}/>
                )
            })
        }
    </div>)
}

export default HomeContainer
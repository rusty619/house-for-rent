import React,{useState, useEffect} from "react"
import HomeContainer from "./HomeContainer";

const Home = () => {
  const [homeData, setHomeData] = useState([])

  const request = async () => {
      let req = await fetch('/homes') 
      let res = await req.json()
      setHomeData(res)
  }

  useEffect(()=>{
    request()
  },[])

  console.log(homeData)

    return(
    <div>
       <HomeContainer homeData={homeData}/>
    </div>)
}

export default Home
import React,{useState, useEffect} from "react"
import HomeContainer from "./HomeContainer";
import FilterHomeType from "./FilterHomeType";

const Home = () => {
  const [homeData, setHomeData] = useState([])
  const [oldHomeData,setOldHomeData] = useState([])
  const [category,setCategory] = useState("")

  const request = async () => {
      let req = await fetch('/homes') 
      let res = await req.json()
      setOldHomeData(res)
      setHomeData(res)
  }

  useEffect(()=>{
    request()
  },[])


 
    const filteredHouse = homeData.filter((home) => {
      if(category === 'all') return oldHomeData
      else return home.home_type.toLowerCase().includes(category.toLowerCase())
    })


    console.log("House type is ",filteredHouse)

    return(
    <div>
      <FilterHomeType setCategory={setCategory}/>
       <HomeContainer homeData={filteredHouse } setCategory={setCategory}/>
    </div>)
}

export default Home
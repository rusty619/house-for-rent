import React,{useState, useEffect} from "react"
import HomeContainer from "./Components/HomeContainer";
import './App.css';

function App() {

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

  return (
    <div className="App">
      <HomeContainer homeData={homeData}/>
    </div>
  );
}

export default App;

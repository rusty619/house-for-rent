import { ref } from "joi"
import React,{useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ExtraInformation from "./ExtraInformation"
import SinglePageDesc from "./SinglePageDesc"
import StuffAvilable from "./StuffAvailable"
import SleepArea from "./SleepArea"
import ReserveBox from "./ReserveBox"
import ThingsToKnow from "./ThingsToKnow"

const SingleHouse = () => {
    const {id} = useParams()
    console.log(id)

    const [homeData,setHomeData] = useState([])


    const request = async () => {
        let req = await fetch(`/homes/${id}`)
        let res = await req.json()
        setHomeData(res)
    }

    useEffect(()=>{
        request()
    },[])  

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // console.log(homeData)
    // console.log(homeData.images && homeData.images.length)

    const {total_occupancy, total_bedrooms, total_bathrooms} = homeData

    return(
    <div>
        {/* id: {id} */}
        <h1 className="single-house-title">{homeData.title}</h1>
        <div className="single-house-container-img">
            <div className="thumbnails"></div>    
        {
            homeData.images && homeData.images.map((image) => {
                return(
                    <div><img src={image.img} className="single-house-img"/></div>
                )
            })
        }
        </div>
        <p className="entire-house">Entire House</p>
        <div className="house-amount-of">
            <p className="house-amount-of-value">{total_occupancy} guests </p>
            <p className="house-amount-of-value">{total_bedrooms} bedrooms </p>
            <p className="house-amount-of-value">{total_bathrooms} baths </p>
        </div>
        <ExtraInformation />
        <div className="blue-cover">
            <img src="https://play-lh.googleusercontent.com/sMkxKt0zPs00TX0E9OZFxcI5GIkZKtjFnLbr1HdaA3w80U2djUB8yu7MeWXEvIp5ruE" className="blue-cover-img"/>
            <p className="blue-cover-desc">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in</p>
        </div>
        <SinglePageDesc key={homeData.id} homeData={homeData}/>
        <SleepArea key={homeData.id} homeData={homeData}/>
        <StuffAvilable key={homeData.id} homeData={homeData}/>
        <ReserveBox homeData={homeData}/>
        <ThingsToKnow />
    </div>)
}

export default SingleHouse
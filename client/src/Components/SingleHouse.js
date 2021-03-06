import { ref } from "joi"
import React,{useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ReactLoading from 'react-loading'
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
    const [owner,setOwner] = useState([])
    const [loading, setLoading] = useState(undefined)
    const {total_occupancy, total_bedrooms, total_bathrooms,owner_id} = homeData


    const request = async () => {
        let req = await fetch(`/homes/${id}`)
        let res = await req.json()
        setHomeData(res)
        setLoading(true)
    }

    useEffect(()=>{
        setTimeout(() => {
            request()
        },1000)
    },[])  

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // console.log(homeData)
    // console.log(homeData.images && homeData.images.length)


    const requestForOwner = async () =>{
        let req = await fetch(`/users/`)
        let res = await req.json()
        setOwner(res)
    }

    useEffect(() => {
        requestForOwner()
    },[])

    console.log("Owner id: ",owner_id)
    console.log("Owner is",owner[owner_id-1])

    return(
    <div>
        {/* id: {id} */}
        {!loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#0000FE"}
          height={'20%'}
          width={'15%'}
          className="now-loading"
          />) : (
        <div>
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
                <div className="intro-to-house">
                    <p className="entire-house">Entire House hosted by {owner[owner_id-1] && owner[owner_id-1].name}</p>
                </div>
                <div className="house-amount-of">
                    <p className="house-amount-of-value">{total_occupancy} guests </p>
                    <p className="house-amount-of-value">{total_bedrooms} bedrooms </p>
                    <p className="house-amount-of-value">{total_bathrooms} baths </p>
                    <img src= {owner[owner_id-1] && owner[owner_id-1].profile_img} className="profile-img"/>
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
    </div>)
}

export default SingleHouse
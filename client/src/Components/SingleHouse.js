import { ref } from "joi"
import React,{useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ExtraInformation from "./ExtraInformation"

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


    console.log(homeData)
    console.log(homeData.images && homeData.images.length)

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
    </div>)
}

export default SingleHouse
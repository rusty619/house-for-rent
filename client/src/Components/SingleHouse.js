import { ref } from "joi"
import React,{useState, useEffect} from "react"
import {useParams} from "react-router-dom"

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

    

    return(
    <div>
        id: {id}
        <p>{homeData.title}</p>
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
    </div>)
}

export default SingleHouse
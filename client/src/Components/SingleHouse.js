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
    let len = homeData.images && homeData.images.length
    console.log("Length is ",len)
    return(
    <div>
        id: {id}
        <p>{homeData.title}</p>
        <div className="single-house-img">
        {
            homeData.images && homeData.images.map((image) => {
                return(
                    <img src={image.img} />
                )
            })
        }
        </div>
    </div>)
}

export default SingleHouse
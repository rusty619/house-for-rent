import React,{useState, useEffect} from 'react'
import ReactLoading from 'react-loading'
import Reservation from './Reservation'

const Scott = () => {

    const [homeData, setHomeData] = useState([])
    const [loading, setLoading] = useState(undefined)

    const request = async () => {
        let req = await fetch(`/users/5`,{
            method: "GET",
            mode: "cors",
            headers: {}
        })
        let res = await req.json()
        setHomeData(res)
        setLoading(true)
    }   
    
    useEffect(()=>{
        setTimeout(() => {
            request()
        },1000)
    },[]) 

    console.log(homeData)

    return(
    <div className="scott">
        {!loading ? (
        <ReactLoading
          type={"cylon"}
          color={"#890F0D"}
          height={'20%'}
          width={'15%'}
          className="now-loading"
        />
        ) : (
            <div name="scott-div">
                <div className="scott-title-div">
                    <img className="holla-if-you-hear-me" src="https://media.istockphoto.com/vectors/flashlight-warning-alarm-light-and-siren-light-flat-design-vector-vector-id1253926432?k=20&m=1253926432&s=612x612&w=0&h=TYhH9fl-Ru153JtkBdhDOqU-Pwxt48kekDq98jAeSH0="/>
                    <h1 className='scott-title'>Holla if you hear me</h1>
                    <img className="holla-if-you-hear-me" src="https://media.istockphoto.com/vectors/flashlight-warning-alarm-light-and-siren-light-flat-design-vector-vector-id1253926432?k=20&m=1253926432&s=612x612&w=0&h=TYhH9fl-Ru153JtkBdhDOqU-Pwxt48kekDq98jAeSH0="/>
                </div>
                <div className="scott-welcome">
                    <img className="scott-welcome-img" src="https://thumbs.gfycat.com/ActiveAnnualDobermanpinscher-size_restricted.gif"/>
                    <h3 className="scott-welcome-name">Welcome {homeData.name}</h3>
                </div>
                <h3 className="scott-h3">Houses you booked</h3>
                <div className="scott-booked">
                    {homeData.reservations && homeData.reservations.map((reservation) => {
                        return(<Reservation reservation={reservation}/>)
                    })
                    }
                </div>
            </div>
        )}
    </div>)
}

export default Scott
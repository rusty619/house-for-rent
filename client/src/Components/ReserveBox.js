import React,{useState} from 'react' 
import dayjs from 'dayjs';

const ReserveBox = ({homeData}) => {

    // const dateEventHandle = (event) => {
    //     event.preventDefault();
    //     console.log(event.target.value)
    // }

    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const totalPrice = homeData.price + 144 + 200

    const changeDateFormat = (value) => {
        dayjs(value).format('MM/DD/YYYY')
    }

    const handleReserveBtn = (event) => {
        alert(`Thank you for booking from ${checkIn} to ${checkOut} for $${((totalPrice) * 3) + totalPrice}`)
        event.preventDefault()
        // console.log(dayjs('2022-06-15').format('MM/DD/YYYY'))
        console.log("Date to check in,",checkIn)
        console.log("Date to check out,",checkOut)
        console.log("Total price is $", totalPrice)
        fetch('/reservations', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "user_id":5,
                "home_id": homeData.id,
                "start_date": checkIn,
                "end_date": checkOut,
                price: totalPrice
            })
            
        })
        console.log("POST request completed")
    }

    return(
    <div className="reserve-border">
        <form onsubmit={handleReserveBtn}>
        <div className="reserve-box">
            <div className='reserve-box-price'>Price: ${homeData.price}</div>
            <div className='reserve-box-date'>
                <input type="date" placeholder="CHECK-IN" className='reserve-box-date-checkin' onChange={(event) => { setCheckIn(dayjs(event.target.value).format('MM/DD/YYYY'))}}/>
                {changeDateFormat(checkIn)}
                <input type="date" placeholder="CHECK-OUT" className='reserve-box-date-checkout' onChange={(event) => { setCheckOut(dayjs(event.target.value).format('MM/DD/YYYY'))}}/>
            </div>
            <button type="submit" className="reserve-box-btn" onClick={handleReserveBtn}>Reserve</button>
            <div className="reserve-box-display-prices">
                <div className="reserve-box-display-prices-row">
                     <div className="reserve-box-display-prices-left">
                        <p >${homeData.price}</p>
                    </div>
                    <div className="reserve-box-display-prices-right">
                        <p>${homeData.price}</p>
                    </div>
                </div>
                <div className="reserve-box-display-prices-row">
                     <div className="reserve-box-display-prices-left">
                        <p >Cleaning Fee</p>
                    </div>
                    <div className="reserve-box-display-prices-right">
                        <p>$144</p>
                    </div>
                </div>
                <div className="reserve-box-display-prices-row">
                     <div className="reserve-box-display-prices-left">
                        <p >Service Fee</p>
                    </div>
                    <div className="reserve-box-display-prices-right">
                        <p>$200</p>
                    </div>
                </div>
            </div>
            <div className='reserve-box-display-total-price'>
                <div className="reserve-box-display-total-price-left">
                    <p>Total before taxes</p>
                </div>
                 <div className="reserve-box-display-total-price-right">
                    <p>${totalPrice}</p>
                 </div>
            </div>
        </div>
        </form>
    </div>)
}

export default ReserveBox
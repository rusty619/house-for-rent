const HomeCard = ({home}) =>{
    const {title, price,images} = home

    return(
    <div className="home-item">
        <img src={images[0].img} className="home-img"/>
        <p>{title}</p>
        <p>${price}</p>
    </div>)
}

export default HomeCard
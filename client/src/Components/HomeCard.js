const HomeCard = ({home}) =>{
    const {title, price,images} = home

    return(
    <div>
        <img src={images[0].img}/>
    </div>)
}

export default HomeCard
import React,{useState} from 'react'

const FilterHomeType = ({setCategory}) => {

    const [allIsSelcted, setAllIsSelected] = useState(true)
    const [lakefontIsSelected, setLakefrontIsSelected] = useState(false)
    const [beachIsSelected, setBeachIsSelected] = useState(false)
    const [cabinIsSelected, setCabinIsSelected] = useState(false)
    const [islandIsSelected, setIslandIsSelected] = useState(false)
    const [campingIsSelected, setCampingIsSelected] = useState(false)
    const [treehouseIsSelected, setTreehouseIsSelected] = useState(false)

    const userClicksAll = () => {
        setCategory("all")
        setAllIsSelected(!allIsSelcted)
        setLakefrontIsSelected(false)
        setBeachIsSelected(false)
        setCabinIsSelected(false)
        setIslandIsSelected(false)
        setCampingIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClicksLakefront = () => {
        setCategory("lakefront")
        setLakefrontIsSelected(!lakefontIsSelected)
        setAllIsSelected(false)
        setBeachIsSelected(false)
        setCabinIsSelected(false)
        setIslandIsSelected(false)
        setCampingIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClicksBeach = () => {
        setCategory("beach")
        setBeachIsSelected(!beachIsSelected)
        setAllIsSelected(false)
        setLakefrontIsSelected(false)
        setCabinIsSelected(false)
        setIslandIsSelected(false)
        setCampingIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClicksCabins = () => {
        setCategory("cabins")
        setCabinIsSelected(!cabinIsSelected)
        setAllIsSelected(false)
        setLakefrontIsSelected(false)
        setBeachIsSelected(false)
        setIslandIsSelected(false)
        setCampingIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClicksIslands = () => {
        setCategory("islands")
        setIslandIsSelected(!islandIsSelected)
        setAllIsSelected(false)
        setLakefrontIsSelected(false)
        setBeachIsSelected(false)
        setCabinIsSelected(false)
        setCampingIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClicksCamping = () => {
        setCategory("camping")
        setCampingIsSelected(!campingIsSelected)
        setAllIsSelected(false)
        setLakefrontIsSelected(false)
        setBeachIsSelected(false)
        setCabinIsSelected(false)
        setIslandIsSelected(false)
        setTreehouseIsSelected(false)
    }

    const userClickTreehouse = () => {
        setCategory("treehouse")
        setTreehouseIsSelected(!treehouseIsSelected)
        setAllIsSelected(false)
        setLakefrontIsSelected(false)
        setBeachIsSelected(false)
        setCabinIsSelected(false)
        setIslandIsSelected(false)
        setCampingIsSelected(false)
    }

    return(
    <div className="filter-home-type">
        <div className={allIsSelcted ? "filter-home-type-all-active" : "filter-home-type-all"}>
            <i class="fa-solid fa-earth-americas" value="all" onClick={userClicksAll}></i>
            <p onClick={userClicksAll} value="all">all</p>
        </div>
        <div className={lakefontIsSelected ? 'filter-home-type-lakefront-active' : "filter-home-type-lakefront"}>
            <i class="fa-solid fa-house-flood-water" value="lakefront" onClick={userClicksLakefront}></i>
            <p onClick={userClicksLakefront} value="lakefont">lakefront</p>
        </div>
        <div className={beachIsSelected ? "filter-home-type-beach-active" : "filter-home-type-beach"}>
            <i class="fa-solid fa-umbrella-beach" value="beach" onClick={userClicksBeach}></i>
            <p onClick={userClicksBeach} value="beach">beach</p>
        </div>
        <div className={cabinIsSelected ? "filter-home-type-cabins-active" :"filter-home-type-cabins"}>
            <i class="fa-solid fa-house" value="cabins" onClick={userClicksCabins}></i>
            <p onClick={userClicksCabins} value="cabins">cabins</p>
        </div>
        <div className={islandIsSelected ? "filter-home-type-islands-active" : "filter-home-type-islands"}>
            <i class="fa-solid fa-map" value="islands" onClick={userClicksIslands}></i>
            <p onClick={userClicksIslands} value="islands">islands</p>
        </div>
        <div className={campingIsSelected ? "filer-home-type-camping-active" : 'filer-home-type-camping'}>
            <i class="fa-solid fa-campground" value="camping" onClick={userClicksCamping}></i>
            <p onClick={userClicksCamping} value="camping">camping</p>
        </div>
        <div className={treehouseIsSelected ? "filter-home-type-treehouse-active" : "filter-home-type-treehouse"}>
            <i class="fa-solid fa-tree" value="treehouse" onClick={userClickTreehouse}></i>
            <p onClick={userClickTreehouse} value="treehouse">treehouse</p>
        </div>
    </div>)
}

export default FilterHomeType;
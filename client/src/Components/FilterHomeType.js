import React,{useState} from 'react'

const FilterHomeType = ({setCategory}) => {

    return(
    <div className="filter-home-type">
        <div className="filter-home-type-all">
            <i class="fa-solid fa-earth-americas" value="all" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="all">all</p>
        </div>
        <div className='filter-home-type-lakefront'>
            <i class="fa-solid fa-house-flood-water" value="lakefront" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="lakefont">lakefront</p>
        </div>
        <div className="filter-home-type-beach">
            <i class="fa-solid fa-umbrella-beach" value="beach" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="beach">beach</p>
        </div>
        <div className="filter-home-type-cabins">
            <i class="fa-solid fa-house" value="cabins" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="cabins">cabins</p>
        </div>
        <div className="filter-home-type-islands">
            <i class="fa-solid fa-map" value="islands" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="islands">islands</p>
        </div>
        <div className='filer-home-type-camping'>
            <i class="fa-solid fa-campground" value="camping" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="camping">camping</p>
        </div>
        <div className="filter-home-type-treehouse">
            <i class="fa-solid fa-tree" value="treehouse" onClick={(e)=> setCategory(e.target.attributes[1].value)}></i>
            <p onClick={(e)=> setCategory(e.target.outerText)} value="treehouse">treehouse</p>
        </div>
    </div>)
}

export default FilterHomeType;
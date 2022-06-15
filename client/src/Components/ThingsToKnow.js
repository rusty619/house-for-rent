import React from "react"

const ThingsToKnow = () => {
    return(
    <div className="things-to-know">
        <h1 className="things-to-know-title">Things to know</h1>
        <div className="things-to-know-rows">
            <div className="things-to-know-first-column">
                <p className="things-to-know-column-header">House rules</p>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-clock"></i>
                    <p className="things-to-know-column-text">Check-in: After 3:00 PM </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-clock"></i>
                    <p className="things-to-know-column-text">Checkout: 12:00 PM </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-door-closed"></i>
                    <p className="things-to-know-column-text">Self check-in with smart lock, keypad </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-paw"></i>
                    <p className="things-to-know-column-text">Pets are allowed </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-beer-mug-empty"></i>
                    <p className="things-to-know-column-text">Yes alcohol will be given to tenants as gifts</p>
                </div>
            </div>
            <div className="things-to-know-second-column">
                <p className="things-to-know-column-header">Health & safety</p>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-head-side-mask"></i>
                    <p className="things-to-know-column-text">BlueCover's COVID-19 safety practices apply </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-smog"></i>
                    <p className="things-to-know-column-text">Carbon monoxide alarm </p>
                </div>
                <div className="things-to-know-icon-with-text">
                    <i class="fa-solid fa-bong"></i>
                    <p className="things-to-know-column-text">Smoke alarm </p>
                </div>
            </div>
        </div>
    </div>)
}

export default ThingsToKnow
import React from "react"

const ExtraInformation = () => {
    return(
    <div className="extra-information">
        <div className="extra-information-self">
              <i class="fa-solid fa-door-open"></i> 
              <p className="extra-information-self-check">Self Check-in</p>
              <p className="extra-information-self-desc">Check yourself in with the keypad.</p>
        </div>
        <div className="extra-information-host">
            <i class="fa-solid fa-medal"></i>
            <p className="extra-information-host-superhost">Owner is a is a Superhost</p>
            <p className="extra-infomration-host-desc">Highly rated hosts who are committed to providing great stays for guests.</p>
        </div>
        <div className="extra-information-cancellation">
            <i class="fa-solid fa-calendar"></i>
            <p className="extra-information-cancellation-desc">Free cancellation for 48 hours.</p>
        </div>
    </div>
)}

export default ExtraInformation;
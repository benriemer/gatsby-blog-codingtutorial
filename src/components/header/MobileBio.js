import React from "react"

import "./header.css"
import profilePic from "../../images/profilePic.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <img src={profilePic}  className="mt-4 ml-3" style={{ maxWidth: `50px`, maxHeight: `50px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
          <p className="mt-5 mr-3">Ben Riemer</p>
        </div>
    )
}

export default MobileBio

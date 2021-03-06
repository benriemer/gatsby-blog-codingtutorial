import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main">
            <div className="text-center">
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">Blog</span></Link></p>
                <p className="d-inline p-4"><Link to="/impressum"><span className="text-dark">Privacy</span></Link></p>
            </div>
        </div>
    )
}

export default MobilePages



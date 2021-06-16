import React from "react"
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaYoutube } from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
  return (
    <div className="bottom-bar py-1">
      <a className="text-success ml-4"
         href={contacts.youtube}>
                <span title="YouTube">
                    <FaYoutube size={26} style={{ color: "red" }} />
                </span>
      </a>
      <a className="text-primary ml-4"
         href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "primary" }} />
                </span>
      </a>
      <a className="text-light ml-4"
         href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{ color: "light" }} />
                </span>
      </a>
      <a className="text-warning ml-4"
         href={contacts.stackoverflow}>
                <span title="Stack Overflow">
                    <FaStackOverflow size={26} style={{ color: "warning" }} />
                </span>
      </a>
    </div>
  )
}

export default MobileSocialLinks

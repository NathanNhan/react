import React from 'react'
import "./navbar.css"
const navbar = () => {
    return (
      <div className="box">
        <ul className="nav-top">
          <li className = "logo-brand" >
            <a href="#">what happen</a>
          </li>
          <li>
            <a href="#">Introduction</a>
          </li>
          <li>
            <a href="#">solution</a>
          </li>
          <li>
            <a href="#">Rate plan</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">Apply for free use</a>
          </li>
        </ul>
      </div>
    );
}

export default navbar

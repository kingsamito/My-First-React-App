import React from "react"
import logo from "../img/logo192.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="leftnav">
                <img
                    src={logo}
                    className="nav-logo"
                    alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
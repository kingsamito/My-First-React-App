import React from "react"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img
                    className="nav-logo"
                    src="./logo192.png"
                    alt="Logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                {props.title}
            </a>
        </nav>

    )
}

export default Navbar
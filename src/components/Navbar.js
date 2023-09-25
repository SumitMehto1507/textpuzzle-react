import React from 'react'
import { Link  } from 'react-router-dom'

export default function Navbar(props) {
    return (
             
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode=== 'light'?'danger': 'dark'} text-${props.mode=== 'light'?'dark': 'light'}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand my-1 mx-3 text-${props.mode=== 'light'?'dark': 'light'}`} to="/"><b>{props.tittle}</b></Link>
                    <button className="navbar-toggler " type="button text-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link menu1 active mx-3 mx-3 text-${props.mode=== 'light'?'dark': 'light'}`} aria-current="page" to="/"><b className='menu1'>Home</b></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={`nav-link menu1 mx-3 mx-3 text-${props.mode=== 'light'?'dark': 'light'}`} to="/about"><b className='menu1'>About Us</b></Link>
                            </li>
                            <li className="nav-item menu1 dropdown mx-3 mx-3">
                                <a className={`nav-link dropdown-toggle text-${props.mode=== 'light'?'dark': 'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <b className='menu1'>Dropdown</b> 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item menu1" href="/"><b>Puzzle Games</b></a></li>
                                    <li><a className="dropdown-item menu1" href="/"> <b>Mind Hunters </b></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item menu1 " href="/"><b>Join Our Team</b></a></li>
                                </ul>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark bg-secondary" type="submit">Search</button>
                        </form> */}
                        <div className= {`form-check form-switch mx-3 mx-3 text-${props.mode=== 'light'?'dark': 'light'}`} >
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Dark Mode</b></label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
          
    )
}

import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

export default function NavBar() {
    let [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className={`navbar screen ${showSideBar && "show-sidebar"}`}>
            <div className="navbar-container">
                <Link className="link" to="/">Logo</Link>

                <nav className="main-nav">
                    <ul className="main-nav-list" onClick={() => setShowSideBar(prev => !prev)}>
                        <li>
                            <Link className="link" to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link className="link" to="/signin">SignIn</Link>
                        </li>
                        <li>
                            <Link className="link" to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </nav>

                <nav className="sns-nav">
                    <ul className="sns-nav-list">
                        <li>
                            <a href="https://github.com/Kazuma-Sadakan" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kazuma-sadakane/" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/sadakane_kazuma" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <button className="btn-mobile-nav" onClick={() => setShowSideBar(prev => !prev)}>
                {showSideBar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
        </div>

    )
}

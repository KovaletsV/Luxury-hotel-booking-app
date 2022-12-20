import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(true);
    };
    return (
        <div name="home" className={menu ? "navbar navbar-bg" : "navbar"}>
            <div className={menu ? "logo dark" : "logo"}>
                <h1>Beach Resort</h1>
            </div>
            <ul className="navbar-menu">
                <Link to="home" smooth={true} duration={500}>
                    <li>Home</li>
                </Link>
                <Link to="destinations" smooth={true} duration={500}>
                    <li>Destinations</li>
                </Link>
                <Link to="carousel" smooth={true} duration={500}>
                    <li>Travel</li>
                </Link>
                <Link to="search" smooth={true} duration={500}>
                    <li>Book</li>
                </Link>
                <Link to="views" smooth={true} duration={500}>
                    <li>Views</li>
                </Link>
            </ul>
            <div className="nav-icons">
                <AiOutlineSearch className="icon" />
                <AiOutlineUser className="icon " />
            </div>
            <div className="burger-menu">
                {menu ? (
                    <RxCross2 className="icon" onClick={() => setMenu(false)} />
                ) : (
                    <AiOutlineMenu className="icon" onClick={handleClick} />
                )}
            </div>

            <div className={menu ? "mobile-menu active" : "mobile-menu"}>
                <ul className="mobile-navbar-menu">
                    <Link to="home" smooth={true} duration={500}>
                        <li>Home</li>
                    </Link>
                    <Link to="destinations" smooth={true} duration={500}>
                        <li>Destinations</li>
                    </Link>
                    <Link to="carousel" smooth={true} duration={500}>
                        <li>Travel</li>
                    </Link>
                    <Link to="search" smooth={true} duration={500}>
                        <li>Book</li>
                    </Link>
                    <Link to="views" smooth={true} duration={500}>
                        <li>Views</li>
                    </Link>
                </ul>
                <div className="nav-buttons">
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className="social-menu">
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                    <FaYoutube className="icon" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

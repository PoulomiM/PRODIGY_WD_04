import React from 'react';
import '../components/navnew.css';
import '../components/global.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={`${window.location.origin}/Assestsall/coding.png`} alt="Image 1" />
                        Developer
                    </Link>

                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AboutMeSection">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/MySkills">
                                My Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ServicesSection">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ProjectsSection">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactSection">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">Create digital brilliance together!</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;

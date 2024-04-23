import React from 'react';
import './NavBar.css';
import cbitLogo from '../../assets/cbit_logo.png'; // Assuming the image is in the same directory as the Navbar component
import profilePic from '../../assets/profile-pic.jpeg';
import {Link}from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <Link className="navbar-brand" to="/wt-assignment-1">
                        <img src={cbitLogo} alt="logo" width="40" height="32" style={{ marginRight: '10px' }} className="d-inline-block align-text-top" />
                        CBIT <span>Careers</span>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/wt-assignment-1/jobs">Jobs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/wt-assignment-1/students">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wt-assignment-1/placements">Placements</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Your Career
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link  className="dropdown-item" to="/wt-assignment-1/applications">Applications</Link></li>
                                <li><Link className="dropdown-item" to='/wt-assignment-1/profile'>Profile</Link></li>
                                <li><Link className="dropdown-item" to="/wt-assignment-1">Saved Jobs <span id="job-count">(2)</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="nav-user-details">
                    
                    <span>160122733051</span>
                    <img src={profilePic} width="40px" height="40px" style={{ borderRadius: '50%' }} alt="profile"></img>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

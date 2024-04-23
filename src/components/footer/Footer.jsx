import React from 'react';
import banner from "../../assets/cbit_full_logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img className="footer-banner" src={banner} alt="CBIT Logo" />
                        </a>
                        <p className="text-body-secondary lh-sm">© 2024</p>
                        <p className="text-body-secondary lh-sm">College Contact Info</p>
                        <p className="text-body-secondary lh-sm">Gandipet, Hyderabad, Telangana,</p>
                        <p className="text-body-secondary lh-sm">PIN: 500075</p>
                        <p className="text-body-secondary lh-sm">Phone: 040-24193276</p>
                        <p className="text-body-secondary lh-sm">Mobile: 8466997201</p>
                        <p className="text-body-secondary lh-sm">Email: principal@cbit.ac.in</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <ul className="nav boy flex-column mt-5">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Placements</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"></a>Research & Consultancy</li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Recruitment</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <ul className="nav boy flex-column mt-5">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">CBIT placement policy</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Students</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Internship Guidlines</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <ul className="nav boy flex-column mt-5">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Linkdin</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram</a></li>
                        </ul>
                    </div>
                </footer>
                
            </div>
        </div>
    )
}

export default Footer;

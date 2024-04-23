import React from 'react';

function Sidebar() {
    return (
        <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <svg className="bi pe-none me-2" width="30" height="24">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-5 fw-semibold">CBIT</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        Location
                    </button>
                    <div className="collapse" id="home-collapse" style={{}}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">search for the location</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Experience
                    </button>
                    <div className="collapse" id="dashboard-collapse" style={{}}>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="level" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Intern & Accren
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" name="level" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Beginner
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="level" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Intermediate
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" name="level" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Advanced
                                </label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                        Branch
                    </button>
                    <div className="collapse" id="orders-collapse" style={{}}>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Civil</option>
                            <option value="1">ComputerScience</option>
                            <option value="2">ECE</option>
                            <option value="3">EEE</option>
                        </select>
                    
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                        Sort By
                    </button>
                    <div className="collapse" id="account-collapse" style={{}}>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    relvance
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    date
                                </label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

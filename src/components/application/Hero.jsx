import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="px-4 my-5 hero-app">
      <div className="container py-4 text-start">
        <p className='fs-5 text-decoration-underline'>Help Recruiters get to know you</p>
        <p className="fs-6 mb-4">Your profile not only helps you apply to jobs quickly but also helps the recruiting team know what type of job you are looking for.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
            <button type="button" className="btn btn-primary btn-sm mt-2px-4 gap-3"><Link to='/profile'>View your Career Profile</Link></button>
          </div>
        </div>
      </div>
  );
}

export default Hero;

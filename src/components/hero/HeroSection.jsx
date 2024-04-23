import React from 'react'
import './HeroSection.css'
import { ReactTyped } from "react-typed"
import heroImage from "../../assets/Our-Placements.png"
const HeroSection = () => {
  return (
    <div className='hero'>
      <br />
      <div className="container-fluid col-xxl-8 px-4 py-5 hero">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={heroImage} className="img-fluid"  alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Be the <ReactTyped
              strings={[
                "NEXT",
                "BEST",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            /><br /> Leader</h1>
            <p className="lead">Explore endless opportunities and kickstart your career journey with our comprehensive placement services. Whether you're seeking internships, full-time positions, or networking opportunities, we provide the resources and support you need to succeed.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Latest</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Help</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroSection
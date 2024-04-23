import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
const Reading = () => {
  return (
    <div>
        <div className='container'>

<h1 className='text-center mb-4'>Student</h1>
<p className='text-start fs-5 text-decoration-underline'>Readings</p>
<div className='d-flex flex-wrap justify-content-center'>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Software Development Internship</h5>
      <p className="card-text">Gain hands-on experience in software development with this internship opportunity.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Marketing Internship</h5>
      <p className="card-text">Learn marketing strategies and techniques through real-world projects in this internship.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Data Analysis Internship</h5>
      <p className="card-text">Analyze large datasets and derive meaningful insights with this internship opportunity.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>

  {/* Additional cards */}
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Graphic Design Internship</h5>
      <p className="card-text">Explore your creativity and design skills in this internship focused on graphic design.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Finance Internship</h5>
      <p className="card-text">Learn financial analysis and investment strategies through real-world finance projects.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Human Resources Internship</h5>
      <p className="card-text">Gain insights into HR practices and workforce management in this internship.</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Resume Workshop</h5>
      <p className="card-text">Gain insights into best resume practices by ex-Microsoft employee</p>
      <a href="#" className="btn btn-light">Learn More <MdOutlineArrowOutward /></a>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Reading
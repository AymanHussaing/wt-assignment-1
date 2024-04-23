import React from 'react';
import Reading from '../components/students/Reading';
import img1 from '../assets/Kodali-Bhavana-Microsoft-Placement_-CBIT.png'
import img2 from '../assets/PAYPAL-INTERNSHIP-SELECTED-STUDENTS-CBIT-2K24.png'
import img3 from '../assets/STUDENT-@MICROSOFT.-CBIT.png'
import img4 from '../assets/Internship-Goldman-Sachman.png'
function Student() {
  return (
    <>
      <Reading />
      <div className='container mt-5'>
        <p className='text-center fs-2 fw-bolder'>Achievments</p>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>

  )
}

export default Student;

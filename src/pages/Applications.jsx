import React from 'react'
import './styles/Application.css'
import { Link } from 'react-router-dom'
import Hero from '../components/application/Hero'
const Applications = () => {
  return (
    <>
     <div className='container'>
      <h1 className='mt-5'>Hello Ayman !</h1>
      <Hero />
      <div className='container mt-4'>
        <p className='fs-3'>Applications</p>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><Link className={"page-link"}>Submitted <span>(2)</span></Link></li>
            <li class="page-item"><Link className={"page-link"}>Draft <span>(0)</span></Link></li>
            <li class="page-item"><Link className={"page-link"}>Archive <span>(0)</span></Link></li>
          </ul>
        </nav> 
        <div className='d-flex flex-row mb-3'>
            <Card /> 
            <Card />
        </div>
        
      </div>
      </div>
    </>
  )
}


function Card({title, time, status}) {
  return (
    <div className="card ms-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Software Student Training in Engineering Program (STEP) Intern, 2024 - India</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Updated 2 months ago</h6>
        <span className='text-primary bg-primary-subtle rounded-1 p-1'>submitted</span>
        <p className='mt-5'><a href="#" class="link-secondary">View Application</a></p>
      </div>
    </div>
  );
}




export default Applications
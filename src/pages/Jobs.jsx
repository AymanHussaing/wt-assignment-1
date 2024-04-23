import React from 'react'
import JobCard from '../components/jobcard/JobCard'
import Sidebar from '../components/sidebar/SideBar'
const Jobs = () => {
  return (
    <>
      <div style={{display:'flex', justifyContent: "space-between"}}>
        <Sidebar />
      <div className='mt-4'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
       </div>
       </div>
    </>
  )
}

export default Jobs
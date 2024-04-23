import React from 'react'
import './styles/Profile.css'
import userReg from './images/user-regular.svg'
import resumeIcon from "./images/file-regular.svg"
import pdfIcon from "./images/cv_PNG30.png"
import eduIcom from "./images/graduation-cap-solid.svg";
import workIcon from "./images/briefcase-solid.svg";
import skillsIcon from "./images/compass-drafting-solid.svg"
import locationIcon from "./images/location-dot-solid.svg"
import profileIcon from "./images/gear-solid.svg"

function Profile() {
    return (
      <div className="container">
        <button className="edit">Edit</button>
        <div className="content-container">
          <div className="resume cont">
            <div className="resume icon">
              <img className="svg" src={resumeIcon} alt="Resume Icon" />
              <span className="resume-text">Resume</span>
            </div>
            <div className="details">
              <img className="res-icon" src={pdfIcon} alt="Resume PDF Icon" />
              <div className="details-text">
                <span className='resume-download'>Resume.pdf</span>
                <span>Uploaded: 2 days ago</span>
                <span>Size: 50 KB</span>
              </div>
            </div>
          </div>
  
          <div className="contact-details cont">
            <div className="contact icon">
              <img className="svg" src={userReg} alt="Contact Icon" />
              <span className="contact-text">Contact Details</span>
            </div>
            <div className="details">
              <div className="left">
                <span className="left-data">Name</span>
                <span className="left-data">Address</span>
                <span className="left-data">Country</span>
                <span className="left-data">City</span>
                <span className="left-data">State/Province</span>
                <span className="left-data">Zip Code</span>
                <span className="left-data">Phone Number</span>
                <span className="left-data">Email</span>
              </div>
              <div className="right">
                <span className="right-data">Neeraj Bhasin</span>
                <span className="right-data">CBIT Boys Hostel</span>
                <span className="right-data">INDIA</span>
                <span className="right-data">Hyderabad</span>
                <span className="right-data">Telangana</span>
                <span className="right-data">50075</span>
                <span className="right-data">9541876404</span>
                <span className="right-data">neeraj123@gmail.com</span>
              </div>
            </div>
          </div>
  
          <div className="education cont">
          <div className="education icon">
            <img className="svg" src={eduIcom} alt="Education Icon" />
            <span className="education-text">Higher education</span>
          </div>
          <div className="details">
            <div className="left">
              <span className="left-data">School</span>
              <span className="left-data">Degree</span>
              <span className="left-data">Degree Status</span>
              <span className="left-data">Area of study</span>
              <span className="left-data">Country</span>
            </div>
            <div className="right">
              <span className="right-data">CBIT</span>
              <span className="right-data">BE</span>
              <span className="right-data">Now attending</span>
              <span className="right-data">CSE</span>
              <span className="right-data">India</span>
            </div>
          </div>
        </div>

        <div className="work-experience cont">
          <div className="work icon">
            <img className="svg" src={workIcon} alt="Work Icon" />
            <span className="work-text">Work experience</span>
          </div>
          <div className="details">
            <div className="data">
              <p className="text">Applying for your first job?</p>
              <span className="text">Yes</span>
            </div>
          </div>
        </div>

        <div className="skills cont">
          <div className="skill-set icon">
            <img className="svg" src={skillsIcon} alt="Skills Icon" />
            <span className="skills-text">Skills</span>
          </div>
          <div className="details">
            <div className="left">
              <span className="left-data">Coding Language</span>
              <span className="left-data">General</span>
              <span className="left-data">Technical</span>
            </div>
            <div className="right">
              <span className="right-data"><span className="data-text">Python</span></span>
              <span className="right-data"><span className="data-text">Time-Management</span></span>
              <span className="right-data"><span className="data-text">JavaScript</span></span>
            </div>
          </div>
        </div>

        <div className="locations cont">
          <div className="location icon">
            <img className="svg" src={locationIcon} alt="Locations Icon" />
            <span className="location-text">Locations</span>
          </div>
          <div className="details">
            <div className="left">
              <span className="left-data">Preferred Locations</span>
            </div>
            <div className="right">
              <span className="right-data">Hyderbad, Telangana, India</span>
              <span className="right-data">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        <div className="profile cont">
          <div className="prof icon">
            <img className="svg" src={profileIcon} alt="Profile Icon" />
            <span className="location-text">Profile Preferences</span>
          </div>
          <div className="details">
            <div className="left">
              <span className="left-data">Personalization</span>
              <span className="left-data">Privacy</span>
            </div>
            <div className="right">
              <span className="right-data">You’ve agreed to personalize your Google Careers profile with job recommendations and related content.</span>
              <span className="right-data">You’ve agreed to the processing of your information.</span>
            </div>
          </div>
        </div>
  
        </div>
        <button className="btn btn-dark" style={{marginTop: '10px'}}>Edit</button>
      </div>
    );
  }
  

export default Profile;
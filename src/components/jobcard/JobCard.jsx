import React from 'react';
import './JobCard.css';

const JobCard = () => {
    return (
        <div className="card w-75 mb-5">
            <div className="card-body">
                <h5 className="card-title">Data Scientist, Product, Google One</h5>
                <p className="card-text"><small className="text-body-secondary"><div className='spec'><span>🏢 CompanyName</span><span>📍Location</span><span>📊 Level</span></div></small></p>
                {/* Show minimum qualifications on larger screens */}
                <p className="card-text d-none d-md-block">Minimum Qualifications</p>
                <ul className="d-none d-md-block">
                    <li className="card-text">Bachelor's degree in Statistics, Mathematics, Data Science, Engineering, Physics, Economics, or a related quantitative field, or equivalent practical experience.</li>
                    <li className="card-text">10 years of experience with analysis applications (e.g., extracting insights, performing statistical analysis, or solving business problems), and coding (e.g., Python, R, SQL).</li>
                    <li className="card-text">Experience in articulating product questions, pulling data from datasets (e.g., SQL), and using statistics.</li>
                </ul>
                <p><a href="#" className="link-secondary app">Learn More</a></p>
            </div>
        </div>
    );
}

export default JobCard;

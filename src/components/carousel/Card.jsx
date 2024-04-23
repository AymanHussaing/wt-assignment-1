import React from 'react';
import './Card.css'; // Import CSS file for styling
import image from '../../assets/amazon.png'
const Card = ({ imageSrc=image, altText, cardText="Search roles in AI and ML" }) => {
    return (
        <div className="card" style={{cursor: 'pointer'}}>
            <img src={imageSrc} className="card-img-top" alt={altText} />
            <hr style={{margin:'5px 0px'}}/>
            <div className="card-body">
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    );
}

export default Card;

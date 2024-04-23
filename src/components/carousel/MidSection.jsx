import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import aiImage from "../../assets/AdobeStock_595600270-1024x768-1.jpg"
import llImage from "../../assets/Types_of_Artificial_Intelligence.avif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}


function MultipleItems() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />, // Custom next arrow
        prevArrow: <SamplePrevArrow />, // Custom previous arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Custom previous arrow component


    return (
        <div className="container-sm">
            <p class="fw-light">Spotlight</p>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card imageSrc={aiImage} cardText="Demystifying Large Language Models"/>
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card imageSrc={llImage} cardText="AI in 2024: The dangers and the hope "/>
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default MultipleItems;

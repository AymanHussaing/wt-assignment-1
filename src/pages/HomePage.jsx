import HeroSection from '../components/hero/HeroSection';
import MidSection from "../components/carousel/MidSection"
import React from 'react';
import Recruiters from '../components/Recruiters';
import PlacementStats from '../components/placement/PlacementStats';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <hr style={{
    height: '2px', /* Adjust height as needed */
    width:'800px',
    backgroundColor: '#ccc', /* Color of the horizontal line */
    margin: '10px auto', /* Adjust margin as needed */
    border: 'none' /* Remove default border */
}}/>
     <MidSection />
      <Recruiters />
      <PlacementStats />
    </>
  );
};

export default HomePage;

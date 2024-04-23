import './Recruiters.css'
import face from '../assets/logos/apple-black-logo-svgrepo-com.svg';
import cocaColaLogo from '../assets/logos/coca-cola-logo-svgrepo-com.svg';
import googleIconLogo from '../assets/logos/google-1-1-logo-svgrepo-com.svg';
import facebookIconLogo from '../assets/logos/facebook-icon-white-logo-svgrepo-com.svg';
import bmwLogo from '../assets/logos/bmw-logo-svgrepo-com.svg';
import intraxLogo from '../assets/logos/intrax-logo-svgrepo-com.svg'; // Assuming the file is named intrax-logo-svgrepo-com.svg
import amazonLogo from '../assets/logos/amazon-icon-logo-svgrepo-com.svg'
import tinderLogo from '../assets/logos/tinder-1-logo-svgrepo-com.svg'
import eyLogo from '../assets/logos/ernst-young-ey-logo-svgrepo-com.svg'
import salesForceLogo from '../assets/logos/salesforce-2-logo-svgrepo-com.svg';

const Recruiters = () => {
    return (
        <div className="container py-5 mt-4">
            <h1 className="text-body-emphasis text-center mb-3">Our Recruiters</h1>

            <div className='logos'>
                <div className='logos-slide'>
                    <img src={face} alt="Apple Logo" />
                    <img src={cocaColaLogo} alt="Coca Cola Logo" />
                    <img src={googleIconLogo} alt="Google Icon Logo" />
                    <img src={facebookIconLogo} alt="Facebook Icon Logo" />
                    <img src={bmwLogo} alt="BMW Logo" />
                    <img src={intraxLogo} alt="Intrax Logo" />
                    <img src={amazonLogo} alt="Amazon Logo" />
                    <img src={tinderLogo} alt="tinder logo" />
                    <img src={eyLogo} alt="EY logo" />
                    <img src={salesForceLogo} alt="EY logo" />
                </div>
                <div className='logos-slide'>
                    <img src={face} alt="Apple Logo" />
                    <img src={cocaColaLogo} alt="Coca Cola Logo" />
                    <img src={googleIconLogo} alt="Google Icon Logo" />
                    <img src={facebookIconLogo} alt="Facebook Icon Logo" />
                    <img src={bmwLogo} alt="BMW Logo" />
                    <img src={intraxLogo} alt="Intrax Logo" />
                    <img src={amazonLogo} alt="Amazon Logo" />
                    <img src={tinderLogo} alt="tinder logo" />
                    <img src={eyLogo} alt="EY logo" />
                    <img src={salesForceLogo} alt="EY logo" />
                </div>
            </div>
        </div>
    );
}

export default Recruiters;

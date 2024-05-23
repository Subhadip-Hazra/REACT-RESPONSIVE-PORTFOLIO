import React from 'react';
import Image from '../assets/a.gif';
import Typical from 'react-typical';
import '../App.css';

const About = () => {
    return (
        <div className="bg-primary min-h-screen flex flex-col md:flex-row items-center justify-center py-10 px-4 md:px-0">
            <div className="max-w-lg mx-auto font-extrabold md:mr-8 p-8 md:mb-0 mb-12 mt-12 lg:text-start text-center">
                <h2 className="text-3xl font-extrabold mb-8 custom-heading text-line sm:text-xs md:text-2xl">Hi,</h2>
                <h2 className="text-3xl text-line mb-8 custom-heading sm:text-xs md:text-2xl">I'm Subhadip,</h2>
                <Typical
                    steps={['Passionate frontend developer', 4000, 'Proficient data analyst', 4000, 'Aspiring fullstack developer', 4000]}
                    loop={Infinity}
                    wrapper="p"
                    className="font-sanjana text-gray-200 md:font-semibold custom-subheading sm:text-base md:text-lg"
                />
            </div>
            <div>
                
            </div>
            <img src={Image} alt="Profile" className="w-96 h-76 rounded mx-auto md:ml-8 mb-4 md:mb-0 custom-image" />
        </div>
    );
}

export default About;

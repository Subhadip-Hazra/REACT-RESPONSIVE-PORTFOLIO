import React from 'react';
import '../App.css';

const AboutMe = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-2xl mx-auto p-8 text-center">
                <h1 className="text-3xl font-bold underline mb-10">About</h1>
                <p className="text-white custom-paragraph font-bold">
                    Hey there! I'm Subhadip Hazra, hailing from the vibrant city of Asansol, West Bengal. My academic journey started at Kanyapur High School, where I completed my 10th and +2. Currently, I'm pursuing a Bachelor's degree in Information Technology from Asansol Engineering College.
                    When it comes to web development, I've got quite a toolkit! I'm your go-to person for front-end magic, boasting skills in HTML, CSS, and JavaScript. I've also got a knack for React.js, Rest API, MongoDB, and MySql, making me quite the versatile developer. Delving into the backend, I'm well-versed in Node.js.
                    Currently, I'm knee-deep in a fascinating project, and if you're keen on contributing, don't hesitate to reach out! Scroll down to learn more about this exciting endeavor.
                    Let's build something awesome together!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;

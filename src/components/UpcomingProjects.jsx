import React from 'react';
import Vedio from '../assets/upcoming_project.mp4';
import '../App.css'

const Projects = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Upcoming Projects</h1>
        <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
          {/* Replace the placeholder with your video */}
          <video
            src={Vedio}
            title="Upcoming Projects Video"
            className="w-dvw h-96 object-cover"
            controls
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="flex justify-center">
        <button className="submit">
        <span>Visit Now</span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

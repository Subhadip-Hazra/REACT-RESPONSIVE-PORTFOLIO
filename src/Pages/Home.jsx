import React from 'react'
import About from '../components/About'
import AboutMe from '../components/AboutMe'
import Projects from '../components/UpcomingProjects'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <About/>
            <AboutMe/>
            <Projects/>
            <Card/>
        </div>
    )
}

export default Home
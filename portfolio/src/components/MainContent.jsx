import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import Projects from './Projects'

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <div id="main-container" className="full-height">
          <section id="home-section">
            <div id="home-container">
              <Home></Home>
            </div>
          </section>

          <section id="about-section">
            <div id="about-container">
              <About></About>
            </div>
          </section>

          <section id="education-section">
            <div id="education-container">
              <Education></Education>
            </div>
          </section>

          <section id="skills-section">
            <div id="skills-container">
              <Skills></Skills>
            </div>
          </section>

          <section id="workexperience-section">
            <div id="workexperience-container">
              <WorkExperience></WorkExperience>
            </div>
          </section>

          <section id="projects-section">
            <div id="projects-container">            
              <Projects></Projects>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

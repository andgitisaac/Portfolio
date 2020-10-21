import React, { Component } from 'react'
import author_img from '../assets/images/author_img.jpg'

export default class Navbar extends Component {
  
  constructor(props) {
    super(props);    
  }

  scrollToSectionOnClick(focus) {
    document.getElementById(focus).scrollIntoView({ 
      behavior: "smooth", 
      block: "start"
    })
  }

  render() {
    return (
      <div>
        <aside id="aside-container" className="full-height">
          <div id="author-container">
            <div id="author-image" style={ {backgroundImage: `url(${author_img})`} }></div>
            <h1 id="author-name">Hwai-Jin Peng</h1>
            <p id="author-description">Software / Full Stack Engineer</p>
          </div>

          <nav id="navbar-container">
            <div id="navbar-content">
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("home-section")}>Home</a> 
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("skills-section")}>Skills</a>
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("work-section")}>Work Experience</a>
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("education-section")}>Education</a>
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("projects-section")}>Publications/Projects</a>
              {/* <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("publications-section")}>Publications</a> */}
              <a className="navbar-section" onClick={() => this.scrollToSectionOnClick("minecraft-section")}>Minecraft</a>
            </div>
          </nav>
                    
          <div id="contact-container">
            <div id="contact-content">
              <a href="https://www.linkedin.com/in/hjpeng/" target="_blank" className="contact-section fab fa-linkedin" rel="noopener noreferrer"></a>
              <a href="https://github.com/andgitisaac" target="_blank" className="contact-section fab fa-github-square" rel="noopener noreferrer"></a>
            </div>
          </div>
        </aside>
      </div>
    )
  }
}

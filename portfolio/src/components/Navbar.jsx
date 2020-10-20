import React, { Component } from 'react'
import author_img from '../assets/images/author_img.jpg'


export default class Navbar extends Component {
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
              <a href="#" className="navbar-section active">Home</a> 
              <a href="#" className="navbar-section">Skills</a>
              <a href="#" className="navbar-section">Work Experience</a>
              <a href="#" className="navbar-section">Education</a>
              <a href="#" className="navbar-section">Projects</a>
            </div>
          </nav>
                    
          <div id="contact-container">
            <div id="contact-content">
              <a href="https://www.linkedin.com/in/hjpeng/" target="_blank" className="contact-section fab fa-linkedin"></a>
              <a href="https://github.com/andgitisaac" target="_blank" className="contact-section fab fa-github-square"></a>
            </div>
          </div>
        </aside>
      </div>
    )
  }
}

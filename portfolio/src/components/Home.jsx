import React, { Component } from 'react'

import home_img from '../assets/images/home_img.jpg'
import resume from "../assets/files/resume.pdf"

export default class Home extends Component {
  render() {
    return (
      <section id="home-section" className="section-container">
        <div id="home-container">
          <div className="image-container">
            <div id="home-image" style={ {backgroundImage: `url(${home_img})`} }></div>
            <div id="home-image-description">
              <h1>
                Hi!<br></br>I'm Hwai-Jin
              </h1>
              <h3>
                Be a problem solver. <br/> Not a coder.
              </h3>

              <div id="resume-button" className="btn btn-primary btn-learn">
                <a href={resume} target='_blank' className="download-description">Download CV</a>
                <i className="fas fa-cloud-download-alt download-icon"></i>
              </div>          
            </div>
          </div>
        </div>
      </section>
    )
  }
}

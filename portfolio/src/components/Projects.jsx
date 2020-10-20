import React, { Component } from 'react'

import ProjectContent from './ProjectContent'

export default class Projects extends Component {

  render() {
    return (
      <section id="projects-section" className="section-container">
        <div id="projects-container">       
          <div className="heading-container">
            <h2 className="subheading">My Work</h2>
            <h2 className="heading">Recent Projects</h2>
          </div>

          <div id="projects-content">
            <ProjectContent
              index="0"
              title="Address Spell Checker"
              descriptions={[
                "Worked with Telenav, Inc @ Santa Clara, California.",
                "Designed an address spell checker for English spell-checking and correction.",
                "Applied an incremental learning-based technique to provide updates to the learned model without further data preprocessing.",
                "Collected and built an evaluation dataset consists of three types of common misspellings.",
                "Achieved over 80% accuracy and < 80ms inference time on word level."
              ]}
              link="https://github.com/andgitisaac/addresschecker"
              media_type="image"
              media_name="address_spell_checker"
            />

            <ProjectContent
              index="1"
              title="Anime Character Generative Adversarial Network"
              descriptions={[
                "description 1",
                "description 2",
                "description 3"
              ]}
              link="https://github.com/andgitisaac/CSE599G1"
              media_type="image"
              media_name="anime_gan"
            />

            <ProjectContent
              index="2"
              title="EE518"
              descriptions={[
                "description 1",
                "description 2",
                "description 3"
              ]}
              link=""
              media_type=""
              media_name=""
            />

          </div>
        </div>
      </section>
    )
  }
}

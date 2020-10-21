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
              title="Spell-Checker for Local Search User Queries"
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
                "Course: UW CSE 599G1 - Introduction to Deep Learning",
                "Implemented GAN-based model to generate plausible faces of anime characters",
                "Incorporated additional information (e.g., eye/hair colors) to take control of the modes of the output images."
              ]}
              link="https://github.com/andgitisaac/CSE599G1"
              media_type="image"
              media_name="anime_gan"
            />

            <ProjectContent
              index="2"
              title="Citation Network Analysis: Prediction and Recommendation"
              descriptions={[
                "Course: UW CSE 547 - Machine Learning for Big Data",
                "Re-implemented several popular citaition netwrok classifiers using either paper content or the citation relationships.",
                "Built a graph convolutional network (GCN) that jointly leveraged the information of network structure and the content of the documents."
              ]}
              link="https://github.com/andgitisaac/CitNet"
              media_type=""
              media_name=""
            />

            <ProjectContent
              index="3"
              title="Stroke-Based Image Artistic Stylization"
              descriptions={[
                "Course: UW ECE 568 - Digital Image Processing",
                "Designed a stroke-based algorithm renders the input image applying the fundamental techniques of the impressionism.",
                "Captured the essence of the object in a series of coarse-to-fine layers using dynamic size of strokes."
              ]}
              link="https://github.com/andgitisaac/stroke-based-stylization"
              media_type="image"
              media_name="stroke_stylization"
            />

          </div>
        </div>
      </section>
    )
  }
}

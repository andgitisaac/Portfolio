import React, { Component } from 'react'

import SkillContent from './SkillContent'

export default class Skills extends Component {
  render() {
    return (
      <section id="skills-section" className="section-container">
        <div id="skills-container">   
          <div className="heading-container">
            <h2 className="subheading">My Specialty</h2>
            <h2 className="heading">My Skills</h2>
          </div>

          <div id="skills-content">
            <SkillContent 
              index="0"
              category="Programming Languages"
              items="Python, Java, C++, JavaScript"
            />

            <SkillContent 
              index="1"
              category="Web Developement"
              items="Flask, Django, React, HTML5, CSS"
            />

            <SkillContent 
              index="2"
              category="Programming Tools"
              items="Git, Bash, MATLAB"
            />

            <SkillContent 
              index="3"
              category="Data Analysis"
              items="MongoDB, SQLite, Spark"
            />

            <SkillContent 
              index="4"
              category="ML &amp; CV Toolkits"
              items="Pytorch, Tensorflow, OpenCV"
            />
          </div>
        </div>
      </section>
    )
  }
}

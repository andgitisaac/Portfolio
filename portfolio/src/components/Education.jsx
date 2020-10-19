import React, { Component } from 'react'

import EducationContent from './EducationContent'

export default class Education extends Component {

  render() {
    return (      
      <section id="education-section" className="section-container">
        <div id="education-container">  
          <div className="heading-container">
            <h2 className="subheading">Education</h2>
            <h2 className="heading">Education</h2>
          </div>

          <div id="education-content">
            <EducationContent 
              school="University of Washington"
              degree="Master of Science"
              department="Electrical &amp; Computer Engineering (GPA: 3.94)"
              descriptions={[]}
              period="Sep. 2019 - Jun 2021"
              location="Seattle, WA"
            />
            
            <EducationContent 
              school="National Taiwan University"
              degree="Bachelor of Science"
              department="Electrical Engineering (GPA: 3.86)"
              descriptions={[
                "Undergrad Research Assistant @ Vision & Learning Lab",
                "Teaching Assistant @ Deep Learning for Computer Vision"
              ]}
              period="Sep. 2014 - Jan. 2019"
              location="Taipei, Taiwan"
            />
          </div>
        </div>
      </section>
    )
  }
}

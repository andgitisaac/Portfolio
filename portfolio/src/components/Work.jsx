import React, { Component } from 'react'

import WorkContent from './WorkContent'

export default class Work extends Component {
  render() {
    return (
      <section id="work-section" className="section-container">
        <div id="work-container">     
          <div className="heading-container">
            <h2 className="subheading">Experience</h2>
            <h2 className="heading">Work Experience</h2>
          </div>

          <div id="work-content">
            <div className="timeline">
              <WorkContent 
                company="Intel Corporation - CCG Chrome Multimedia Team"
                job="Chrome Software Engineer Intern"
                descriptions={[
                  {
                    name: "Chromebook Test Automation Framework",
                    values: [
                      {name: "Built a RESTful Flask application for test automation of Chromebook audio (SOF) and graphics (GFX) drivers."},
                      {name: "Handled multi-threaded test suites in the background and updated their status periodically."},
                      {name: "Reduced test cycle time by over 80% by integrating distinct test suites and redirecting results to web UI in real time."}
                    ]
                  },
                  {
                    name: "Sound Open Firmware Integration Manger",
                    values: [
                      {name: "Designed a Linux command line simulator for advanced users to configure the deployment of firmware and topology."},
                      {name: "Sanitized raw user inputs of subprocesses to pass the security scan of Bandit and Checkmarx."},
                      {name: "Refactored the automation process of building SOF for distinct Intel CPU microarchitectures."}
                    ]
                  }
                ]}
                period="July 2020--Aug. 2020"
                location="Taipei, Taiwan"
              />

              <WorkContent 
                company="BravoAI Co., Ltd."
                job="Backend Software Engineer Intern"
                descriptions={[
                  {name: "Utilized MongoDB database to build RESTful web services to manage policies. Cooperated with one of the biggest insurance companies in Taiwan."},
                  {name: "Slashed 15% cost and time by dealing with over 1,000 insurance subscriptions and claims electronically every day."},
                  {name: "Proposed collecting customers’ e-signatures for few-shot verification of identification to prevent identity theft."}
                ]}
                period="Oct. 2018--Jan. 2019"
                location="Taipei, Taiwan"
              />

              <WorkContent 
                company="National Taiwan University - Vision &amp; Learning Lab"
                job="Undergraduate Research Assistant"
                descriptions={[
                  {name: "Published paper as the first author: \"Element-Embedded Style Transfer Networks for Style Harmonization\" in BMVC 2019."},
                  {name: "Introduced a pair of global/local discriminator to eliminate the inharmonicity between element and image with style of interest."},
                  {name: "Surpassed the state-of-the-art methods in terms of speed (3 order faster), while yielding comparable satisfactory output images."}
                ]}
                period="July. 2018--Apr. 2019"
                location="Taipei, Taiwan"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

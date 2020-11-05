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
                      {name: "Established a test automation web framework for Chromebook audio (SOF), graphics (GFX) and camera drivers."},
                      {name: "Implemented a thread-safe manager to control the task database access and handle the test suites commands in the queue."},
                      {name: "Engineered a thread suspension to allow 70% of CPU to enter C10 state (deep sleep) by halting idle threads to reduce power consumption."},
                      {name: "Reduced test cycle time by 80% by integrating distinct test suites and redirecting results to web UI in real-time."}
                    ]
                  },
                  {
                    name: "Sound Open Firmware Integration Manger",
                    values: [
                      {name: "Created a Linux command line simulator for advanced users to configure the deployment of firmware and topology."},
                      {name: "Refactored and modularized the automation process of SOF deployment for distinct Intel CPU microarchitectures."}
                    ]
                  }
                ]}
                period="July 2020--Aug. 2020"
                location="Taipei, Taiwan"
              />

              <WorkContent 
                company="BravoAI Co., Ltd. (FinTech Startup)"
                job="Software Engineer"
                descriptions={[
                  {name: "Utilized Flask and MongoDB to build a RESTful web service of insurance policies management."},
                  {name: "Designed a user role hierarchy to determine the levels of access that users have to customer information."},
                  {name: "Deducted 20% of paperwork time by instantly notifying the agents through app and emails for new enrollments and reimbursements."}
                ]}
                period="Oct. 2018--Jan. 2019"
                location="Taipei, Taiwan"
              />

              <WorkContent 
                company="National Taiwan University - Vision &amp; Learning Lab"
                job="Research Assistant"
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

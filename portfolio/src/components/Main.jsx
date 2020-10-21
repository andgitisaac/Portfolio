import React, { Component } from 'react'

import Home from './Home'
import Education from './Education'
import Skills from './Skills'
import Work from './Work'
import Projects from './Projects'
import Publications from './Publications'
import Minecraft from './Minecraft'

export default class Main extends Component {

  render() {
    return (      
      <div>
        <div id="main-container" className="full-height">
          <Home></Home>
          <Skills></Skills>
          <Work></Work>
          <Education></Education>
          <Projects></Projects>
          {/* <Publications></Publications> */}
          <Minecraft></Minecraft>
        </div>
      </div>
    )
  }
}

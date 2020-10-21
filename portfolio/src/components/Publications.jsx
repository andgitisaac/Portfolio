import React, { Component } from 'react'

import PublicationContent from './PublicationContent'

export default class Publications extends Component {
  render() {
    return (
      <section id="publications-section" className="section-container">
        <div id="publications-container">     
          <div className="heading-container">
            <h2 className="subheading">My Research</h2>
            <h2 className="heading">Publications</h2>
          </div>

          <div id="publications-content">
            <PublicationContent
              index="0"
              title="Element-Embedded Style Transfer Networks for Style Harmonization"
              abstract={
                "Neural image style transfer has been receiving increasing attention on the creation of artistic images. Given a reference image with style of interest, image style harmonization aims to blend an element from one image into this reference, achieving harmonization for the stylized output. We present an Element-Embedded Style Transfer Network (E2STN) for addressing this task. Our proposed network uniquely integrates style transfer and image matting modules. Together with global and local discriminators, both context and style information can be properly preserved in the embedded output. In the experiments, we show that our proposed network performs favorably against existing style transfer models and is able to produce results with satisfactory quality."
              }
              link="https://bmvc2019.org/wp-content/uploads/papers/0425-paper.pdf"
              media_name="E2STN"
            />
          </div>
        </div>
      </section>
    )
  }
}

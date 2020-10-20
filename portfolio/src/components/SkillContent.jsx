import React, { Component } from 'react'

export default class SkillContent extends Component {
  render() {
    const collapse_href = `#collapse${this.props.index}`;
    const collapse_id = `collapse${this.props.index}`;
    return (
      <div>        
        <div className="panel-group skill-entry">
          <div className="panel panel-default">
            <div className="panel-heading skill-heading" data-toggle="collapse" href={collapse_href}>
              <h4 className="panel-title skill-title">
                <a id="skill-heading-text" data-toggle="collapse" href={collapse_href}>{this.props.category}</a>
              </h4>
            </div>
            <div id={collapse_id} className="panel-collapse collapse">
              <div className="panel-body skill-body">
                <p id="skill-body-text">{this.props.items}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

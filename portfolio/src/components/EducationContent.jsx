import React, { Component } from 'react'

export default class EducationContent extends Component {
  render() {
    return (
      <div>        
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1 text-left">
            <div className="school mb-0">{this.props.school}</div>
            <div className="degree mb-3">{this.props.degree}</div>
            <div className="department">{this.props.department}</div>
            <div className="school-description">
              <ul>
                {this.props.descriptions.map(item=> (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="period">{this.props.period}</span>
            <span className="location">{this.props.location}</span>
          </div>
        </div>
      </div>
    )
  }
}

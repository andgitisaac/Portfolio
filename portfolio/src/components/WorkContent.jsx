import React, { Component } from 'react'

export default class WorkExperienceContent extends Component {
  render() {    
    function ListItem({ item }) {
      let children = null;
      if (item.values && item.values.length) {
        children = (
          <ul>
            {item.values.map(subitem => (
              <ListItem item={subitem} />
            ))}
          </ul>
        );
      }
    
      return (
        <li>
          {item.name}
          {children}
        </li>
      );
    }

    return (
      <div>
        <div className="work-entry left">
          <div className="work-entry-content">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 text-left">
                <div className="company mb-0">{this.props.company}</div>
                <div className="job mb-3">{this.props.job}</div>
                <div className="work-description">
                  <ul>
                    {this.props.descriptions.map(subitem => (
                      <ListItem item={subitem} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="period">{this.props.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

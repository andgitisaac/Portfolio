import React, { Component } from 'react'

export default class PublicationContent extends Component {
  constructor(props) {
    super(props);
    this.openPublication = this.openPublication.bind(this);
    this.closePublication = this.closePublication.bind(this);
    this.displayLink = this.displayLink.bind(this);
    this.displayMedia = this.displayMedia.bind(this);
    this.publicationID = `publication_${this.props.index}`;

    this.images = {
      "E2STN": {
        uri: require("../assets/images/publications/E2STN.jpg")
      }
    }
  }

  openPublication() {
    document.getElementById(this.publicationID).style.width = "100%";
  }

  closePublication() {
    document.getElementById(this.publicationID).style.width = "0%";
  }

  displayLink() {
    if (!this.props.link) return null;
    return (
      <div id="link-button" className="btn btn-primary btn-learn">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">View</a>
      </div>      
    )
  }

  displayMedia() {
    if (!this.props.media_name) return null;
    return (
      <img className="media-image" src={this.images[this.props.media_name].uri} alt="Media Image"></img>
    );
  }

  render() {
    return (
      <div>
        <div id={this.publicationID} className="overlay">
          <a className="closebtn" href="javascript:void(0)" onClick={this.closePublication}>&times;</a>
          <div className="overlay-content">
            <h3 className="overlay-title">{this.props.title}</h3>
            <div className="overlay-abstract">
              {this.props.abstract}
            </div>
            
            <div className="overlay-link-container">
              {this.displayLink()}
            </div>

            <div className="overlay-media-container">
              {this.displayMedia()}
            </div>
            
          </div>
        </div> 

        <div className="display">
          <div className="panel-heading publication-heading">
            <h4 className="panel-title publication-title">
              <span className="open-icon" onClick={this.openPublication}>&#9776;</span>
              <a className="publication-heading-text" href="javascript:void(0)" onClick={this.openPublication}>{this.props.title}</a>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

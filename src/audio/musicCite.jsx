import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/music.css"

class MusicCitation extends Component {
    state = { 
        hideText: true
     }
    
    render() { 
        const {hideText} = this.state;
        console.log(hideText)
        return (
            <span>
              <FontAwesomeIcon className="info-circle" icon={["fas", "info-circle"]} onClick={this.handleShowCite} />
              <p className="card-text music-card-text" hidden={hideText}>{this.props.text}</p>
            </span>
          );
    }
    handleShowCite = () => {
        this.setState({hideText: !this.state.hideText});
    }

}
 
export default MusicCitation;


import React from 'react';
import './Contact.css';
import PropTypes from "prop-types";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online: props.online,
        };
      }
    render() {
    return (
      <div className="Contact">
        <img src={this.props.avatar} className="avatar" alt="avatar" />
        <div>
          <p>{this.props.name}</p>
          <div className="status" onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline })
          }}>
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <div className="status-text">
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    )
    };
  }
  
  Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired
  };

export default Contact

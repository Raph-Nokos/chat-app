import React from 'react';
import './Contact.css';
import PropTypes from "prop-types";

function Contact(props) {
    return (
      <div className="Contact">
        <img src={props.avatar} className="avatar" alt="avatar" />
        <div>
          <p>{props.name}</p>
          <div className="status">
            <div
              className={props.online ? "status-online" : "status-offline"}
            ></div>
            <div className="status-text">
              {props.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired
  };

export default Contact

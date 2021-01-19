import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
        <img src='https://randomuser.me/api/portraits/women/83.jpg' class='avatar' alt='avatar'/>
        <div>
            <p>Terri Sanders</p>
            <div class='status'>
                <div class='status-offline'></div>
                <div class='status-text'>offline</div>
            </div>
        </div>
        </div>
    )}

export default Contact

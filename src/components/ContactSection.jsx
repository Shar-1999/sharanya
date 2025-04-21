import React, { Component } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import '../styles/iconStyle.css';

export class ContactSection extends Component {
  render() {
    return (
      <div className='dark:text-white px-4 md:px-16 bg-black w-full'>
        <span className="icon">
          <a href="https://github.com/Shar-1999?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="mailto:msharanya423@gmail.com">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/sharanya-m-316a921b0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </span>
      </div>
    )
  }
}

export default ContactSection;
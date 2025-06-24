import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Achintya Dubey</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/achintyadu" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/achintya-dubey-a8489325b/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:achintyady@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer
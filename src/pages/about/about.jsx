// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import '../about/about.css'

import Image from '../../assets/yo.jpg'

import Icon1 from '../../assets/next-js.svg'
import Icon2 from '../../assets/vite.png'
import Icon3 from '../../assets/icon3.png'
import Icon4 from '../../assets/icon4.png'
import Icon5 from '../../assets/react.svg'
import Icon6 from '../../assets/icon1.png'
import Icon7 from '../../assets/icon2.png'
import Icon8 from '../../assets/jest.png'

import { Link } from 'react-router-dom';

import resumePDF from '../../assets/AngeloDorangeResume.pdf'

import { gsap } from 'gsap';


function About() {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'AngeloDorangeResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    gsap.fromTo('.card-about', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
  }, []);


  return (
    <section className="about">
      <div className="max-width">
        <div className="content">

          <div className="title">
            <h1>About Me</h1>
          </div>

          <div className="cards card-about">

            <div className="left">
              <div className="image">
                <img src={Image} alt="" />
              </div>
            </div>

            <div className="right">

              <div className="text">
                
                <div className="about-text">
                 <p><span>Angelo Dorange</span> is who I am. My objective as a <span>frontend developer</span> is to produce attractive and intuitive websites and web applications.</p>
                 <p>I am an expert at creating user interfaces that are simple to use and provide users a pleasant experience. I bring ideas to life on the web with a great eye for design and a solid grasp of front-end programming concepts.</p>
                 <p>I am here to help if you want to improve your online presence. I am available for <span>work and collaborative</span> opportunities. Talk to me about your project right away.</p>
                </div>
              </div>

              <div className="skills">
              <div className="title-skills">
                  <h1>Tech Stacks</h1>
                </div>

                <div className="icons-tech">
                  <ul>
                    <li><img src={Icon6} alt="HTML5 ICON" /></li>
                    <li><img src={Icon7} alt="CSS3 ICON" /></li>
                    <li><img src={Icon3} alt="BOOTSTRAP ICON" /></li>
                    <li><img src={Icon4} alt="JAVASCRIPT ICON" /></li>
                    <li><img src={Icon5} alt="REACT ICON" /></li>
                    <li><img src={Icon1} alt="NEXT JS ICON" /></li>
                    <li><img src={Icon2} alt="VITE JS ICON" /></li>
                    <li><img src={Icon8} alt="JEST ICON" /></li>
                  </ul>
                </div>
              </div>

              <div className="btn-right">
                <button className='btn' onClick={downloadResume}>Download Resume</button>
                <Link to="/contact" className='btn btn-contact'>Contact</Link>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
// eslint-disable-next-line no-unused-vars
import  React, { useRef, useState, useLayoutEffect } from 'react'
import '../home/home.css'

import Profile from '../../assets/profile.jpg'

import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GiEnvelope } from 'react-icons/gi';

import { Link } from 'react-router-dom';

import { gsap, Elastic, Expo } from 'gsap'

//import Transition from '../../transition'

function Home() {

    const textRef = useRef(null);
    const titleRef = useRef(null);
    const iconRef = useRef(null);
    const imageRef = useRef(null);
    const btnRef = useRef(null);

    useLayoutEffect(() => {

      

      gsap.fromTo(titleRef.current, {
        y: -50, opacity: 0
      }, {
        y: 0, opacity: 1, duration: 1, ease: 'powe2.inOut', delay: 0.5
      });


      gsap.fromTo(textRef.current, {
        y: -30, opacity: 0
      }, {
        y: 0, opacity: 1, duration: 1, ease: 'powe2.inOut', delay: 1.5
      });

        gsap.fromTo(btnRef.current, {
            y: 50, opacity: 0
        }, {
            y: 0, opacity: 1, duration: 1, ease: 'powe2.inOut', delay: 2.2
        });

        gsap.fromTo(iconRef.current, {
            x: -100, opacity: 0
        }, {
            x: 0, opacity: 1, duration: 1.5, ease: Expo.easeOut, delay: 2.7
        });

        gsap.fromTo(imageRef.current, {
            scale: 0, opacity: 0
        }, {
            scale: 1, opacity:1, duration: 1.5, ease: Elastic.easeOut.config(1, 0.3), delay: 4
        });


    }, []);


  return (
    <section className="hero">
        <div className="max-width">
        
            <div className="content">

                <div className="hero-content">

                  <div className="profile">
                    <div className="image" ref={imageRef}>
                      <img src={Profile} alt="My profile picture" />
                    </div>
                  </div>

                  <div className="greeting" ref={titleRef}>
                    <h1>👋hi, i&apos;m angelo dorange</h1>
                  </div>

                  <div className="text" ref={textRef}>
                    <p>I&apos;m a passionate front-end developer that code beautiful and scalable frontend products.</p>
                  </div>

                  

                  <div className="btn-hero" ref={btnRef}>
                    <Link to="/projects" className='btn'>PROJECTS</Link>
                  </div>

                </div>

                <div className="medias" ref={iconRef}>
                    <ul>
                      <li><a href="https://github.com/AngeloDorange" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
                      <li><a href="https://www.linkedin.com/in/angelo-dorange-007529225" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                      <li><a href="https://www.instagram.com/p/CYZe1ptoL0f/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></li>
                      <li><a href="https://web.facebook.com/Creative-Web-475697893182425/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                      <li><a href="mailto:web4032@gmail.com?subject=questions&body=writeyourquestionshere"><GiEnvelope /></a></li>
                    </ul>
                  </div>

            </div>
        </div>
    </section>
  )
}

export default Home

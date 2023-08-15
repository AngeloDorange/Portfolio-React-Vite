// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandFiverr } from 'react-icons/tb';
import { SiUpwork } from 'react-icons/si';

import { gsap } from 'gsap';

import '../contact/contact.css';

import Email from '../email/email'

function Contact() {

  useEffect(() => {
    gsap.fromTo('.card-animation', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
  }, []);


  const [state, handleSubmit] = useForm("mayvkynj");
  
  if (state.succeeded) {
    return <Email />;
  }

  return (
    <section className="contact">
      <div className="max-width">
      
        <div className="content">
          <div className="title">
            <h1>get in touch</h1>
          </div>

          <div className="cards card-animation">
            <div className="left">
              <form onSubmit={handleSubmit} method="post">
                <div className="input-container">
                  <input type="text" name="name" id="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <label>Enter Your Name</label>
                </div>

                <div className="input-container">
                  <input type="email" name="emal" id="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <label>Enter Your Email</label>
                </div>

                <div className="input-container">
                  <textarea name="message" id="message" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <label>Enter Your Message</label>
                </div>

                <div className="btn-contact">
                  <button type="submit" className="btn" disabled={state.submitting}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="right">
              <div className="message">
                <h6>Drop me a line for inquiries, collaboration, suggestions, or just to say hello.</h6>
              </div>

              <div className="hi">
                <h1>Hire me on</h1>
                <ul>
                  <li><a href="https://www.fiverr.com/angelodorange"><TbBrandFiverr /></a></li>
                  <li><a href="https://www.upwork.com/freelancers/~017838663ff73e0742"><SiUpwork /></a></li>
                  <li><a href="mailto:web4032@gmail.com?subject=questions&body=writeyourquestionshere"><HiOutlineMail /></a></li>
                </ul>
              </div>

              <div className="socials-icons">
                <h1>Find me on socials</h1>
                <ul>
                  <li>
                    <a href="https://web.facebook.com/Creative-Web-475697893182425/" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AngeloDorange" target="_blank" rel="noopener noreferrer">
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AngeloDorange?t=Myf4iXDMZP3JxUucllG4Tw&s=09" target="_blank" rel="noopener noreferrer">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/angelo-dorange-007529225" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          
          <footer>
          <hr />
            <p>
              &copy; {new Date().getFullYear()}.
              Developed with ❤️ by <span>Angelo Dorange</span>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Contact;

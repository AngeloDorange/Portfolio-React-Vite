// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import '../projects/project.css'


import Item1 from '../../assets/p1.jpg'
import Item2 from '../../assets/p2.jpg'
import Item3 from '../../assets/p3.jpg'
import Item4 from '../../assets/p4.jpg'
import { BiLinkAlt } from 'react-icons/bi';


import { gsap } from 'gsap';

function Project() {

  useEffect(() => {
    gsap.fromTo('.card-portfolio', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section className="portfolio">
        <div className="max-width">
            <div className="content">
              <div className="title">
                <h1>Latest projects</h1>
              </div>

              <div className="cards card-portfolio">

                <div className="card">

                  <div className="left">
                    <div className="image">
                      <img src={Item1} alt="" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                      <span>Touch&eacute;</span>
                      <h2>Restaurant Website</h2>
                      <div className="btn-item">
                        <a href="https://angelodorange.github.io/" target="_blank" rel="noopener noreferrer"><BiLinkAlt /></a>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div className="image">
                      <img src={Item2} alt="" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                      <span>Anofli</span>
                      <h2>Portfolio Website</h2>
                      <div className="btn-item">
                        <a href="http://alifpage.atwebpages.com/" target="_blank" rel="noopener noreferrer"><BiLinkAlt /></a>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="card">

                  <div className="left">
                    <div className="image">
                      <img src={Item3} alt="" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                      <span>Catalog</span>
                      <h2>Photography website</h2>
                      <div className="btn-item">
                        <a href="http://studioseven.atwebpages.com/" target="_blank" rel="noopener noreferrer"><BiLinkAlt /></a>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div className="image">
                      <img src={Item4} alt="" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                      <span>Standby</span>
                      <h2>Landing Page Website</h2>
                      <div className="btn-item">
                        <a href="http://standby.atwebpages.com/" target="_blank" rel="noopener noreferrer"><BiLinkAlt /></a>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>

            </div>
        </div>
    </section>
  )
}

export default Project
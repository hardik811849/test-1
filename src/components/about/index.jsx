import React, { useEffect } from 'react'
// import { Col, Row } from "react-bootstrap";
import InnerBanner from '../innerBanner'
import PageHeading from '../pageHeading'

// import Team from "../team";
// import jay from "../../assets/img/team/jayy.png";
// import andy from "../../assets/img/team/Andrew.png";
import inside from '../../assets/img/inside.png'
import Bottom from '../home/Bottom'
import Loader from '../layout/loader'
import Aos from 'aos'

import aboutBanner from '../../assets/img/greenHydroImages/inner-banner.png'

const About = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Loader />
      <InnerBanner title='About Us' image={aboutBanner} />
      <PageHeading heading="Our mission is to spearhead a transformation towards a resilient and sustainable energy landscape by unlocking hydrogen's true potential.​​" />

      <div className='about-owner'>
        <div className='about-heading-wrap'>
          <div className='about-heading'>
            <div data-aos-duration='500' data-aos='fade-up'>
              <p className='text-center'>Expertise and Integrity</p>
            </div>
          </div>
        </div>

        {/* <div className="owner-detail">
          <Row className="align-items-md-end justify-content-between gy-4">
            <Col lg="6">
              <div className="owner-img-wrap">
                <div data-aos-duration="700" data-aos="fade-right">
                  <Team img={jay} name="Dr. Jay Patel" position="CEO" />
                </div>
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Team
                    img={andy}
                    name="Dr. Andrew Davidoff"
                    position="Founder & CTO"
                  />
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div data-aos-duration="700" data-aos="fade-up">
                <p className="about-section-title">
                  Dr. jay patel & Dr. Andrew davidoff
                </p>
                <p className="about-section-desc">
                  have worked together for more than two decades, investing $3.5
                  billion through four distinct commodity price cycles. In this
                  time, they have learned the value of specialization, being in
                  the flow of the energy value chain and moving with dexterity
                  to identify and capitalize on emerging trends.
                </p>
              </div>
            </Col>
          </Row>
        </div> */}

        <div className='mission-wrap'>
          <div className='mission-content'>
            <div
              data-aos-duration='700'
              data-aos='fade-up'
              data-aos-delay='1000'
            >
              <p className='mission'>
                Combined with recent technological advances in heat exchangers,
                turbines, and generators, hydrogen energy-based electricity has
                become a desirable and competitive renewable alternative that’s
                abundant and inexpensive. Hydrogen196 will successfully develop
                and responsibly produce hydrogen energy and electricity.
              </p>

              <p className='mission mt-3'>
                Our mission is to spearhead a transformation towards a resilient
                and sustainable energy landscape by unlocking hydrogen's true
                potential.​
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='about-inner-section'>
        <div data-aos-duration='700' data-aos='fade-up' data-aos-delay='1000'>
          <h4 className='inner-about-title'>
            SMALLEST SURFACE FOOTPRINT OF ANY POWER SOURCE PER MW INSTALLED
            CAPACITY
          </h4>
        </div>

        <div data-aos-duration='700' data-aos='fade-up' data-aos-delay='1000'>
          <div className='about-info-wrap'>
            <div className='earth-img'>
              <img src={inside} alt='' />
            </div>

            <div className='about-info-content'>
              <p className='highlight-text'>
                At Hydrogen196, our mission is to deliver a sustainable and
                emissions-free energy solution that offers affordable and
                reliable low-cost dispatchable baseload power to a wide range of
                sectors.
              </p>

              <p className='desc-text'>
                From power providers and heavy industry to data centers, housing
                developments, and commercial applications, both on and off the
                grid, our hydrogen-based solutions aim to transform the energy
                landscape. Hydrogen196 leverages the countless advantages of
                hydrogen energy, ensuring round-the-clock power generation and
                grid stability, 365 days a year. The key differentiator lies in
                the dispatchability of hydrogen power, eliminating the need for
                battery storage and making it an ideal choice among other
                renewable energy sources. With a steadfast commitment to a
                greener tomorrow, we harness the power of hydrogen to propel the
                world towards a cleaner and more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </>
  )
}

export default About

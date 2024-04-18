import React, { useEffect, useState } from 'react'
// import { Col, Row } from "react-bootstrap";
import InnerBanner from '../innerBanner'
import PageHeading from '../pageHeading'
import Team from './team'

// import Team from "../team";
// import jay from "../../assets/img/team/jayy.png";
// import andy from "../../assets/img/team/Andrew.png";
import rightimage from '../../assets/img/AboutusImgOne.png'
import bannerImage from '../../assets/img/Group 13218.png'
import bottomgroup from '../../assets/img/aboutuslong.png'
import bottomgrouprightone from '../../assets/img/AboutUsRightOne.png'
import img1 from '../../assets/img/team/1.png'
import Bottom from '../home/Bottom'
import Loader from '../layout/loader'
import Aos from 'aos'

import aboutBanner from '../../assets/img/greenHydroImages/inner-banner.png'

const AboutUs = props => {
  const [teamFilter, setTeamFilter] = useState(Team)
  const [active, setActive] = useState(1)
  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init()
  }, [])

  let filterTeam = []

  const handleFilter = val => {
    setActive(val)
    setTeamFilter(Team)
  }

  const handleFilterFounder = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (res.designation === 'CTO' || res.designation === 'CEO') {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  const handleFilterOperations = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (res.designation === 'Operations') {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  const handleFilterBusiness = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (res.designation === 'Business') {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  const handleFilterFinance = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (res.designation === 'Financial ' || res.designation === 'Finance') {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  const handleFilterTech = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (
        res.position === 'Chief Engineering Officer' ||
        res.designation === 'CTO'
      ) {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  const handleFilterLegal = val => {
    setActive(val)
    filterTeam = Team.filter(res => {
      if (res.position.includes('Legal')) {
        return res
      }
    })
    setTeamFilter(filterTeam)
  }

  return (
    <>
      <Loader />
      <InnerBanner
        data-aos-duration='700'
        data-aos='fade-up'
        data-aos-delay='1000'
        title='About Us'
        image={aboutBanner}
      />
      <div className='middle_section_aboutus'>
        <div className='banner_section'>
          <div className=''>
            <div className='row position-relative'>
              <div
                data-aos-duration='700'
                data-aos='fade-up'
                data-aos-delay='1000'
                className='col-12'
              >
                <div className='banner_text'>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to revolutionize Hydrogen production by
                    adopting sustainable practices that minimize environmental
                    impact. Green Hydrogen196 will achieve this by providing
                    land, power, & capital. By harnessing geothermal energy and
                    innovative technology, we aim to produce Hydrogen in a way
                    that contributes to a greener and more sustainable future
                    for generations to come.
                  </p>
                </div>
                <div className='banner_Image_about'>
                  <img
                    src={bannerImage}
                    alt=''
                    className='img-fluid w-100'
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='bottom_text_section'>
          <div className=''>
            <div className='row'>
              <div
                data-aos-duration='700'
                data-aos='fade-left'
                data-aos-delay='1000'
                className='col-lg-6 col-sm-12 col-12'
              >
                <h3>
                  <br /> <br />
                  Vision: To lead the transition towards carbon-neutral ammonia
                  production.
                </h3>
                <p>
                  <br />
                  Our vision is to become a leading force in the global effort
                  to achieve carbon-neutral hydrogen production. By
                  demonstrating the viability and benefits of utilizing
                  geothermal energy for Hydrogen synthesis, we strive to inspire
                  and encourage the broader industry to adopt renewable energy
                  solutions and reduce greenhouse gas emissions.
                </p>
              </div>
              <div className='col-lg-6 col-sm-12 col-12'>
                <div
                  data-aos-duration='700'
                  data-aos='fade-right'
                  data-aos-delay='1000'
                  className='img-about-us d-flex justify-content-end'
                >
                  <img src={bottomgrouprightone} alt='' className='w-75'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bottom-section-about'>
            <div className='about-us-mission'>
              <div className='row'>
                <div className='col-lg-6 col-sm-12 col-12 '>
                  <div
                    data-aos-duration='700'
                    data-aos='fade-left'
                    className='text_area_'
                  >
                    <h3>
                      Hydrogen196's mission is centered around pioneering the
                      deployment of the hydrogen power plant in Texas and then
                      in whole world.
                    </h3>
                    <p>
                      With recent strides in fuel cell technology, electrolysis,
                      and energy storage, hydrogen-based electricity emerges as
                      a competitive renewable alternative. Hydrogen196 is
                      dedicated to responsibly developing and producing hydrogen
                      energy, utilizing innovative solutions for a greener, more
                      sustainable future. Through cutting-edge advancements, we
                      aim to establish hydrogen as a leading, abundant, and
                      cost-effective source of clean power worldwide.
                    </p>
                    <div className='bottom_section_p'>
                      <p>
                        At Hydrogen196, we're revolutionizing a sustainable
                        future.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos-duration='700'
                  data-aos='fade-right'
                  className='col-lg-6 col-sm-12 col-12 mt-3 mt-lg-0  d-flex justify-content-end'
                >
                  <img src={rightimage} alt='' className='w-75'></img>
                </div>
              </div>
            </div>
            <div className='row team-filter-head'>
              <div className='col-md-12 col-lg-12'>
                <div className='row'>
                  <div className='col-lg-4 col-md-12 col-sm-12 col-12 '>
                    <p className='p-1'>Our Team</p>
                  </div>
                  <div className='col-lg-8 col-md-12 col-sm-12 col-12 filter-team'>
                    <div className='p-1'>
                      <button
                        onClick={active => handleFilter(1)}
                        className={
                          active === 1
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        All{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={active => handleFilterFounder(2)}
                        className={
                          active === 2
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Founder{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={() => handleFilterOperations(3)}
                        className={
                          active === 3
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Operations{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={() => handleFilterBusiness(4)}
                        className={
                          active === 4
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Business{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={() => handleFilterFinance(5)}
                        className={
                          active === 5
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Finance{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={() => handleFilterTech(6)}
                        className={
                          active === 6
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Technology{' '}
                      </button>
                    </div>
                    <div className='p-1'>
                      <button
                        onClick={() => handleFilterLegal(7)}
                        className={
                          active === 7
                            ? 'btn btn-success  rounded-0'
                            : 'btn btn-outline-success  rounded-0'
                        }
                      >
                        {' '}
                        Legal{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-12 col-lg-12 mt-2'>
                <div className='row'>
                  {teamFilter.map(item => (
                    <div key={item.id} className='col-sm-2 col-12 col20_team'>
                      <div
                        data-aos-duration='700'
                        data-aos='fade-up'
                        data-aos-delay='1000'
                        className='team_img'
                      >
                        <img src={item.img_path} className='img-fluid' />
                        <div className='team_text'>
                          <p>{item.name}</p>
                          <span>{item.position}</span>
                          {/* <div className="team_text_1">
                    </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs

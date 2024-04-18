import React from "react";
// import {Link} from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import acrossGlobe from "../../assets/img/compitativeAdvantageBottomImage.png";
import card2 from "../../assets/img/greenHydroImages/focus_right.png";
import card1 from "../../assets/img/greenHydroImages/scicatBottomLeft.png";
import InnerBanner from "../innerBanner";

import { useNavigate } from "react-router-dom";
import leftImage from "../../assets/img/AboutUsLeft.png";
import advantages_banner from "../../assets/img/greenHydroImages/compitativeAdvantageRightTop.png";
import advanBanner from "../../assets/img/greenHydroImages/compotetiveBanner.png";
import Loader from "../layout/loader";

const Advantages = () => {
  const navigate = useNavigate();
  return (
    <>
      <Loader />
      <div className="advantages-wrap">
        <InnerBanner
          data-aos-duration="550"
          data-aos="fade-up"
          data-aos-delay="700"
          title="WHY US"
          image={advanBanner}
        />
        <div className="row page-heading-wrap">
          <div className="cal-12">
            {/* <p
              data-aos-duration='550'
              data-aos='fade-left'
              data-aos-delay='700'
              className='text pt-5'
            >
              Welcome to Hydrogen196, where our passion for sustainability
              drives us to harness the boundless potential of hydrogen energy
              for a cleaner, greener future. As an industry leader in renewable
              energy, we are committed to redefining energy production, storage,
             
            </p> */}
          </div>
          <div className="top-advantage-section">
            <div className="row">
              <div className="col-lg-7 col-sm-12 col-12">
                <div
                  data-aos-duration="550"
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  <p className="text ">
                    Welcome to Hydrogen196, where our passion for sustainability
                    drives us to harness the boundless potential of hydrogen
                    energy for a cleaner, greener future. As an industry leader
                    in renewable energy, we are committed to redefining energy
                    production, storage, and utilization with a strong focus on
                    hydrogen. Our mission is toF spearhead a transformation
                    towards a resilient and sustainable energy landscape by
                    unlocking hydrogen's true potential. <br />
                    <br />
                    At Hydrogen196, sustainability is at the core of all our
                    actions. We are dedicated to mitigating climate change,
                    reducing carbon emissions, and preserving the planet for
                    future generations. Our hydrogen-based solutions aim to
                    revolutionize the energy industry with eco-friendly,
                    economically viable, and socially responsible practices.
                    Innovation drives our success at Hydrogen196. We constantly
                    push the boundaries of hydrogen-based solutions through
                    cutting-edge research, development, and revolutionary
                    storage and distribution systems.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="550"
                data-aos="fade-up"
                data-aos-delay="700"
                className="col-lg-5 col-sm-12 col-12 d-flex justify-content-end"
              >
                <img src={advantages_banner} className="w-75" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-focus mt-5 pb-5">
          <div className="">
            <div className="banner_head">
              <div className="row">
                <div className="col-12">
                  <div className="tech_">
                    <div className="text-center">
                      {/* <span className='title_1'>WE FOCUS IN</span> */}
                      <h6
                        data-aos-duration="550"
                        data-aos="fade-right"
                        data-aos-delay="700"
                        className="com-title"
                      >
                        Our Focus
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6 col-sm-12 col-12">
                  <div className="card h-100">
                    <img
                      data-aos-duration="550"
                      data-aos="fade-up"
                      data-aos-delay="700"
                      src={card1}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body card__">
                      <h5
                        data-aos-duration="550"
                        data-aos="fade-up"
                        data-aos-delay="700"
                        className="card-title text-left"
                      >
                        Infrastructure
                      </h5>

                      <p className="text-left text-lg">
                        Facilitate hydrogen production facility near the
                        geothermal source. Plan for proper infrastructure to
                        extract and supply geothermal fluids and manage any
                        waste streams.​
                      </p>
                      {/* <span
                        className="cursor-pointer"
                        onClick={() => navigate("/technology/orc")}
                      >
                        {" "}
                        Know More
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mt-4 mt-md-0">
                  <div className="card h-100">
                    <img
                      data-aos-duration="550"
                      data-aos="fade-up"
                      data-aos-delay="700"
                      src={card2}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body card__">
                      <h5
                        data-aos-duration="550"
                        data-aos="fade-left"
                        data-aos-delay="700"
                        className="card-title text-left"
                      >
                        Resources
                      </h5>
                      <p className="text-left text-lg">
                        Provide resources to Commission the required
                        electrolysis equipment, along with storage and
                        compression facilities for the produced hydrogen.​
                      </p>
                      {/* <span
                        className="cursor-pointer"
                        onClick={() => navigate("/technology/scicat")}
                      >
                        {" "}
                        Know More
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white advantages-sec">
          <div className="">
            <div className="box_content">
              <div className="row">
                {/* <div className="col-1" /> */}
                <div className="col-xl-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="550"
                    data-aos="fade-out"
                    data-aos-delay="800"
                    className="title_4"
                  >
                    <h4> Join Us in Embracing the Hydrogen Revolution </h4>
                    <p>
                      The journey to a sustainable energy future starts with a
                      collective commitment to change. At Hydrogen196, we invite
                      you to join us in embracing the hydrogen revolution and be
                      a part of the movement towards a cleaner, greener world.
                      Together, we can create a positive impact, reduce our
                      carbon footprint, and build a brighter future for
                      generations to come. Explore our website to learn more
                      about our initiatives, technologies, and how you can be a
                      catalyst for change. Let's work together for a sustainable
                      tomorrow!
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="550"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className=" d-flex justify-content-end"
                  >
                    <img className="w-75" src={acrossGlobe} alt=""></img>
                  </div>
                </div>
                {/* <div className="col-1" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="middle_section_advantages">
          <div className="">
            <div className="row">
              <div
                data-aos-duration="550"
                data-aos="fade-left"
                className="col-xl-6 col-sm-12 col-12"
              >
                <img src={leftImage} alt="" className="w-75"></img>
              </div>
              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="550"
                  data-aos="fade-right"
                  className="text_area_"
                >
                  <h3>Empowering Communities with Green Energy</h3>
                  <p>
                    <br />
                    At the heart of our mission is a commitment to empowering
                    communities with access to clean, green energy. Through
                    localized hydrogen production and distribution systems, we
                    aim to bridge energy gaps in remote areas and provide a
                    reliable, sustainable energy source that fosters economic
                    growth and social development.
                  </p>
                  {/* <div className='leftborder_'>
                    <p>
                      <span className=""></span>
                      Geothermal power plants emit about 99 percent less carbon
                      dioxide than fossil fuel power plants of similar size.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row className="page-heading-wrap padding-0 growing-wrap">
          <Col md="12">
            <div
              data-aos-duration="550"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {/* <img className='responsive' src={growth} alt='growth' /> */}
            </div>
          </Col>
        </Row>
        {/* <div>
          <div data-aos-duration="700" data-aos="fade-up">
            <img
              src={advantages_banner}
              alt="advantages_banner"
              style={{ width: "100%" }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Advantages;

import React from "react";
import { Button } from "react-bootstrap";

const BannerContatctUs = (props) => {
  // const navigate = useNavigation()
  return (
    <div className="banner-wrap">
      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1100"> */}
      <video
        src={
          "https://all-sites-under.s3.us-east-2.amazonaws.com/hydrogen196/h2_homepagevideo.mov"
        }
        loop
        muted
        autoPlay
        className="banner-video"
      />
      {/* </div> */}

      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1200">
        <img src={banner} alt="" className="banner-svg" />
      </div> */}

      <div className="banner-content-contact">
        <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1300">
          <div className="row">
            <div className="nik">
              <div className=" opacity-100  banner-text-top">
                <p className="opacity-75">Embracing the Hydrogen Revolution</p>
                <h5 className="banner-text text-white">
                  Greener Tomorrow through Sustainable Hydrogen Solutions.
                </h5>
                <h6 className="text-white">
                  Your Catalyst for a Greener Future! Discover innovative
                  hydrogen solutions that drive sustainable energy transition
                  and pave the way towards a cleaner, more resilient world. Join
                  us in embracing the hydrogen revolution today!
                </h6>
                <div className="pt-2 d-flex flex-row ">
                  <Button
                    onClick={props.onLearnMore}
                    className="btn learn-more  me-2 text-white"
                    title="Learn more"
                    // style={{borderRadius:'30px'}}
                  >
                    Know more
                  </Button>{" "}
                  &nbsp;
                  <Button
                    onClick={props.onLets}
                    className="btn btn-outline-success transparent-bg text-white"
                    title="Let's connect"
                    // style={{borderRadius:'30px'}}
                  >
                    Let's connect
                  </Button>
                </div>
              </div>
            </div>
            <div className=" col-6" />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default BannerContatctUs;

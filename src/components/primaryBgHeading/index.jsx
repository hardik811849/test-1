import Aos from "aos";
import React, { useEffect } from "react";

const PrimaryBgHeading = (props) => {
  useEffect(() => {
    Aos.init();
  }, {});

  return (
    <div className="primary-bg-heading">
      <div data-aos-duration="700" data-aos="fade-up">
        <div className="primary-bg">
          <h4 className="bg-heading">{props.heading}</h4>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBgHeading;

import React from "react";
import About from "../home/About";
import Bottom from "../home/Bottom";
import InnerBanner from "../innerBanner";
import Loader from "../layout/loader";
import PageHeading from "../pageHeading";

const Contact = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="PARTNERS" />
      <div className="portfolio-partners">
        <PageHeading heading="Our portfolio is an extension of our firm, and our management teams are our long-term partners – many across multiple investments." />
        <About title="Geo Thermal Partners" />
        <Bottom />
      </div>
    </>
  );
};

export default Contact;

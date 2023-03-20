import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Header1 from "components/headers/Header1.js";
import Header2 from "components/headers/Header2.js";
import Header3 from "components/headers/Header3.js";
import Header4 from "components/headers/Header4.js";
import Header5 from "components/headers/Header5.js";
import Cards from "components/presentation-page/Cards";
import Testimonials from "components/presentation-page/Testimonials";

function HeadersSection() {
  return (
    <>
      <div className="cd-section" id="headers">
        <Header3 />
      </div>
    </>
  );
}

export default HeadersSection;

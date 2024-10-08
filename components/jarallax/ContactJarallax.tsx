"use client"

import React from "react";
import Link from "next/link";

const ContactJarallax = () => {
  return (
    <div className="container-xxl text-center">
      <div className="d-inline-flex text-start">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="fz-36" style={{
            paddingInline: "16px",
            color: "lightgray",
            width: "fit-content",
            background: "var(--ptf-accent-1)",
          }}>Describe your project
          </div>
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
          <div className="fz-70 fz-90--lg has-white-color fw-bold lh-1p1">
            <Link href="/contact-us" className="ptf-filled-link">
              Contact ZaVolt
            </Link>
          </div>
          <div className="fz-60 fz-90--lg has-white-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ height: "1em" }}
              viewBox="0 0 17 17"
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJarallax;

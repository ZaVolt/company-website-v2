"use client";

import Image from "next/image";
import {Fragment} from "react";

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#a9d100",
    imgHeight: "70px",
    imgName: "ctp.png",
    title: "Commercial Technologies Plus",
  },
  {
    delayAnimation: "100",
    hoverBg: "#27adea",
    imgHeight: "80px",
    imgName: "ogl.png",
    title: "Ocean Gate\nLogistics",
  },
  {
    delayAnimation: "200",
    hoverBg: "#bcf09a",
    imgHeight: "100px",
    imgName: "geld.png",
    title: "Geld\nNetwork",
  },
  {
    delayAnimation: "300",
    hoverBg: "#ef6d7c",
    imgHeight: "100px",
    imgName: "ff.png",
    title: "Fitness First\nSri Lanka",
  },
  {
    delayAnimation: "400",
    hoverBg: "#b5b4b3",
    imgHeight: "100px",
    imgName: "sumaga.png",
    title: "Sumaga Ruhunu\nCircle of Deaf",
  },
  {
    delayAnimation: "500",
    hoverBg: "#0064cf",
    imgHeight: "80px",
    imgName: "stag-tech.png",
    title: "Stag\nTechnologies",
  },
];

const Brand = () => {
  return (
    // @ts-ignore
      <div className="row" style={{"--bs-gutter-y": "2rem", alignItems: "center"}}>
      {brandContent.map((item, i) => (
        <div className="col-6 col-md-3 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                // @ts-ignore
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <Image
                  width={200}
                  height={200}
                  style={{
                    height: item.imgHeight,
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                  src={`/images/root/clients/${item.imgName}`}
                  alt="Client Logo"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{item.title.split('\n').map((word, index) => (
                  <Fragment key={index}>
                    {word} <br/>
                  </Fragment>
              ))}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;

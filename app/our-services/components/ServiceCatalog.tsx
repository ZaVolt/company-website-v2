import {services} from "../data";


const ServiceCatalog = () => {
  return (
    <>
      {services.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
              {/*<Link*/}
              {/*  href={`/our-services/${val.handle}`}*/}
              {/*  className="ptf-service-box__link"*/}
              {/*></Link>*/}
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.description1}</p>
              <p>{val.description2}</p>
            </div>
              {/*<div className="ptf-service-box__arrow">*/}
              {/*  <i className="lnil lnil-chevron-right"></i>*/}
              {/*</div>*/}
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCatalog;

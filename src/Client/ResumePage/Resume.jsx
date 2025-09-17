import React from "react";
import "./resumepage.scss";
import { resumePageData } from "../Data/ResumePageData";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/a11y";

// Swiper Tesing
SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

const Resume = () => {
  return (
    <>
      {/* Resume section start */}

      <div id="resume" className="projectpge">
        <div className="container-fluid nav_bg prjtcls">
          <div className="row">
            <div className="col-10 mx-auto">
              {/* Section Title */}
              <section id="prjtcls" className="prjtcls mb-5">
                <div className="container">
                  <div className="section-title">
                    <span>{resumePageData.sectionTitleSpan}</span>
                    <h2>{resumePageData.sectionTitleHeading}</h2>
                    <p>{resumePageData.sectionTitleParagraph}</p>
                  </div>
                </div>
              </section>
              {/* Section Title Ends */}

              {/* Resume Card Section */}
              <div
                className="product_image_area margintopcls"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="container">
                  <div className="row s_product_inner">
                    <div className="col-lg-6 resumePageClas">
                      <div
                        className="s_Product_carousel"
                        data-aos="fade-up-right"
                        data-aos-delay="100"
                      >
                        <div className="coursel-manage">
                          <Swiper
                            tag="section"
                            wrapperTag="ul"
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            id="main"
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay
                            spaceBetween={0}
                          >
                            {resumePageData.resumeImages.map((item) => (
                              <SwiperSlide>
                                {" "}
                                <img
                                  className="img-fluid"
                                  src={item}
                                  alt="Resume logo"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 ">
                      <div
                        className="s_product_text"
                        data-aos="fade-up-left"
                        data-aos-delay="100"
                      >
                        <h3>{resumePageData.resumeHeading}</h3>

                        <p>
                          {resumePageData.resumeSocialArray.map((item) => (
                            <a href={item.link} className="githubicn">
                              {item.logo}
                            </a>
                          ))}
                        </p>
                        <h1 className="toolscls">
                          {resumePageData.sectionName}
                        </h1>

                        <h2>{resumePageData.resumeHeadingOne}</h2>
                        <h2> {resumePageData.resumeHeadingTwo}</h2>

                        {/* Roles Section */}
                        <h1 className="toolscls">Open For Roles:</h1>
                        <ul className="tags">
                          {resumePageData.rolesArray.map((item) => (
                            <li>
                              <a href="roles.com" className="tag">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>

                        <div className="artclebtn">
                          <a
                            href={resumePageData.resumeLink}
                            className="cta"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{resumePageData.resumeButton}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Card SectionEnds */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

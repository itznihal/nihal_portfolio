import React, { useMemo } from "react";
import "./resumepage.scss";
import { resumePageData } from "../Data/ResumePageData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

const Resume = React.memo(() => {
  const resumeImages = useMemo(() => resumePageData.resumeImages || [], []);
  const socialLinks = useMemo(() => resumePageData.resumeSocialArray || [], []);
  const roles = useMemo(() => resumePageData.rolesArray || [], []);

  return (
    <div id="resume" className="projectpge">
      <div className="container-fluid nav_bg prjtcls">
        <div className="row">
          <div className="col-10 mx-auto">
            <section id="prjtcls" className="prjtcls mb-5" aria-label="Resume section">
              <div className="container">
                <div className="section-title">
                  <span>{resumePageData.sectionTitleSpan}</span>
                  <h2>{resumePageData.sectionTitleHeading}</h2>
                  <p>{resumePageData.sectionTitleParagraph}</p>
                </div>
              </div>
            </section>

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
                          modules={[Navigation, Pagination, A11y, Autoplay]}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          spaceBetween={0}
                          loop={resumeImages.length > 1}
                          aria-label="Resume images carousel"
                        >
                          {resumeImages.map((item, index) => (
                            <SwiperSlide key={`resume-img-${index}`}>
                              <img
                                className="img-fluid"
                                src={item}
                                alt={`Resume page ${index + 1}`}
                                loading="lazy"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <div
                      className="s_product_text"
                      data-aos="fade-up-left"
                      data-aos-delay="100"
                    >
                      <h3>{resumePageData.resumeHeading}</h3>

                      <p>
                        {socialLinks.map((item, index) => (
                          <a
                            key={`resume-social-${index}`}
                            href={item.link}
                            className="githubicn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${item.link}`}
                          >
                            {item.logo}
                          </a>
                        ))}
                      </p>
                      <h2 className="toolscls">
                        {resumePageData.sectionName}
                      </h2>

                      <p>{resumePageData.resumeHeadingOne}</p>
                      <p>{resumePageData.resumeHeadingTwo}</p>

                      <h2 className="toolscls">Open For Roles:</h2>
                      <ul className="tags">
                        {roles.map((role, index) => (
                          <li key={`role-${index}`}>
                            <span className="tag">{role}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="artclebtn">
                        <a
                          href={resumePageData.resumeLink}
                          className="cta"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Download resume"
                        >
                          <span>{resumePageData.resumeButton}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Resume.displayName = "Resume";

export default Resume;

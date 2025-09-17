import React from "react";
import "./projectpage.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import { projectPageData } from "../Data/ProjectPageData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/a11y";

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

const Projects = () => {
  return (
    <>
      <div id="projectss" className="projectpge">
        <div className="container-fluid nav_bg prjtcls">
          <div className="row">
            <div className="col-10 mx-auto">
              <section id="prjtcls" className="prjtcls">
                <div className="container">
                  <div className="section-title">
                    <span>{projectPageData.sectionTitleSpan}</span>
                    <h2>{projectPageData.sectionTitleHeading}</h2>
                    <p>{projectPageData.sectionTitleParagraph}</p>
                  </div>
                </div>
              </section>

              <section id="header1" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                  <div className="row firstele">
                    <div className="col-10 mx-auto">
                      <div className="row srvccls">
                        <div
                          className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                          data-aos="fade-right"
                          data-aos-delay="100"
                        >
                          <h1> {projectPageData.sectionTitleHeading}</h1>
                          <h2 className="my-3">
                            {projectPageData.projectDescription}
                          </h2>
                        </div>

                        <div
                          className="col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc"
                          data-aos="fade-left"
                          data-aos-delay="200"
                        >
                          <img
                            src={projectPageData.projectImage}
                            className="img-fluid animated imgabt"
                            alt="Project Section"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {projectPageData.project.map((item) => (
                <div
                  className="product_image_area "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="container">
                    <div className="row s_product_inner">
                      <div className="col-lg-6 crouselClass">
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
                              {item.projectImages.map((item) => (
                                <SwiperSlide>
                                  <img
                                    className="img-fluid"
                                    src={item}
                                    alt="auction img"
                                  />{" "}
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
                          <h3>{item.projectName}</h3>
                          <p>
                            <a
                              href="https://github.com/itznihal/ONLINE-AUCTION"
                              className="githubicn"
                            >
                              <AiOutlineGithub className="githubicn" />
                            </a>
                          </p>

                          <h1 className="toolscls">Tools</h1>

                          <ul class="tags">
                            {item.techTags.map((item) => (
                              <li>
                                <a href="techtag.com" class="tag">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>

                          <h2>{item.projectDescription}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

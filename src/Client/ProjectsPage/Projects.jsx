import React, { useMemo } from "react";
import "./projectpage.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { projectPageData } from "../Data/ProjectPageData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

const Projects = React.memo(() => {
  const projects = useMemo(() => projectPageData.project || [], []);

  return (
    <div id="projectss" className="projectpge">
      <div className="container-fluid nav_bg prjtcls">
        <div className="row">
          <div className="col-10 mx-auto">
            <section
              id="prjtcls"
              className="prjtcls"
              aria-label="Projects section"
            >
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
                        <h1>{projectPageData.sectionTitleHeading}</h1>
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
                          alt="Projects showcase"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {projects.map((project, projectIndex) => (
              <div
                key={`project-${projectIndex}-${project.projectName}`}
                className="product_image_area"
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
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            spaceBetween={0}
                            loop={project.projectImages.length > 1}
                            aria-label={`${project.projectName} image carousel`}
                          >
                            {project.projectImages.map((image, imageIndex) => (
                              <SwiperSlide
                                key={`slide-${projectIndex}-${imageIndex}`}
                              >
                                <img
                                  className="img-fluid"
                                  src={image}
                                  alt={`${project.projectName} screenshot ${
                                    imageIndex + 1
                                  }`}
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
                        <h3>{project.projectName}</h3>
                        {project.githubUrl && (
                          <p>
                            <a
                              href={project.githubUrl}
                              className="githubicn"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.projectName} on GitHub`}
                            >
                              <AiOutlineGithub
                                className="githubicn"
                                aria-hidden="true"
                              />
                            </a>
                          </p>
                        )}

                        <h2 className="toolscls">Tools</h2>

                        <ul className="tags" role="list">
                          {project.techTags.map((tag, tagIndex) => (
                            <li key={`tag-${projectIndex}-${tagIndex}`}>
                              <span className="tag" role="listitem">
                                {tag}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <p>{project.projectDescription}</p>
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
  );
});

Projects.displayName = "Projects";

export default Projects;

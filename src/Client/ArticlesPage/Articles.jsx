import React, { useReducer } from "react";
import "./articlesfile.scss";
import { articlePageData } from "../Data/ArticlePageData";
import article from "../Images/Articles/articles.png";
import articleImage from "../Images/Medium/medium-articles.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
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

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

const Articles = () => {
  console.log("Article dat is ", articlePageData);
  return (
    <>
      <div id="articles" className="projectpge">
        <div className="container-fluid nav_bg prjtcls">
          <div className="row">
            <div className="col-10 mx-auto">
              <section id="prjtcls" className="prjtcls">
                <div className="article-img">
                  <img
                    src={articleImage}
                    className="imageClass-article"
                    alt="Article"
                  />
                </div>
                <div className="container">
                  <div className="section-title">
                    <span>{articlePageData.sectionTitleSpan}</span>
                    <h2>{articlePageData.sectionTitleHeading}</h2>
                    <p>{articlePageData.sectionTitleParagraph}</p>
                  </div>
                </div>
              </section>

              <section id="header1" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                  <div className="row firstele">
                    <div className="col-10 mx-auto">
                      <div className="row srvccls">
                        <div
                          className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column articlebgimage"
                          data-aos="fade-right"
                          data-aos-delay="100"
                        >
                          <h1> {articlePageData.sectionTitleHeading}</h1>
                          <h2 className="my-3">
                            {articlePageData.articleDescription}
                          </h2>
                        </div>

                        <div
                          className="col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc"
                          data-aos="fade-left"
                          data-aos-delay="200"
                        >
                          <img
                            src={article}
                            className="img-fluid animated imgabt"
                            alt="Article Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {articlePageData.articles.map((item) => (
                <div
                  className="product_image_area "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="container">
                    <div className="row s_product_inner">
                      <div className="col-lg-6">
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
                              {item.articleImg.map((item) => (
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
                          <h3>{item.articleName}</h3>

                          {/* <p>
                            <a
                              href="https://github.com/itznihal"
                              className="githubicn"
                            >
                              <AiOutlineGithub className="githubicn" />
                            </a>
                          </p>

                          <h1 className="toolscls">Tools</h1> */}

                          <h2>{item.articleDescription}</h2>

                          <ul className="tags">
                            {item.articleTags.map((item) => (
                              <li>
                                <a href="#" className="tag">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>

                          <div className="artclebtn">
                            <a href={item.articleLink} className="cta">
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <section
                id="header1article"
                className="d-flex align-items-center"
              >
                <div className="container-fluid nav_bg">
                  <div className="row firstele">
                    <div className="col-10 mx-auto">
                      <div className="row srvccls">
                        <div
                          className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column canvaarticleimg"
                          data-aos="fade-right"
                          data-aos-delay="100"
                        >
                          <h1>
                            {articlePageData.articleSection.sectionTitleHeading}
                          </h1>

                          <a
                            href={articlePageData.articleSection.sectionLink}
                            target="_blank"
                          >
                            <div className="badge">
                              <div className="text">
                                {articlePageData.articleSection.Read}
                              </div>
                            </div>
                          </a>
                        </div>

                        <div
                          className="col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc houseeffect d-flex justify-content-center align-items-center"
                          data-aos="fade-left"
                          data-aos-delay="200"
                        >
                          <img
                            src={articlePageData.articleSection.sectionImg}
                            className="img-fluid animated imgabt"
                            alt="auction img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;

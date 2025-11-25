import React, { useMemo } from "react";
import "./articlesfile.scss";
import { articlePageData } from "../Data/ArticlePageData";
import article from "../Images/Articles/articles.png";
import articleImage from "../Images/Medium/medium-articles.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

const Articles = React.memo(() => {
  const articles = useMemo(() => articlePageData.articles || [], []);
  return (
    <div id="articles" className="projectpge">
      <div className="container-fluid nav_bg prjtcls">
        <div className="row">
          <div className="col-10 mx-auto">
            <section
              id="prjtcls"
              className="prjtcls"
              aria-label="Articles section"
            >
              <div className="article-img">
                <img
                  src={articleImage}
                  className="imageClass-article"
                  alt="Articles section"
                  loading="lazy"
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
                          alt="Articles showcase"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {articles.map((article, articleIndex) => (
              <div
                key={`article-${articleIndex}-${article.articleName}`}
                className="product_image_area"
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
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            spaceBetween={0}
                            loop={article.articleImg.length > 1}
                            aria-label={`${article.articleName} image carousel`}
                          >
                            {article.articleImg.map((img, imgIndex) => (
                              <SwiperSlide
                                key={`article-img-${articleIndex}-${imgIndex}`}
                              >
                                <img
                                  className="img-fluid"
                                  src={img}
                                  alt={`${article.articleName} ${imgIndex + 1}`}
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
                        <h3>{article.articleName}</h3>
                        <p>{article.articleDescription}</p>

                        <ul className="tags">
                          {article.articleTags.map((tag, tagIndex) => (
                            <li key={`tag-${articleIndex}-${tagIndex}`}>
                              <span className="tag">{tag}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="artclebtn">
                          <a
                            href={article.articleLink}
                            className="cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read article: ${article.articleName}`}
                          >
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <section id="header1article" className="d-flex align-items-center">
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
                          rel="noopener noreferrer"
                          aria-label="Visit Medium profile to read all articles"
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
                          alt="Medium articles showcase"
                          loading="lazy"
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
  );
});

Articles.displayName = "Articles";

export default Articles;
